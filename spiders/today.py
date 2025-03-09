# -*- coding: utf_8 -*-
import datetime
import re
import json
import requests
from bs4 import BeautifulSoup

EVENT_MAX_LENGTH = 64


def getCurrentYear():
    return datetime.datetime.now().year


def getDateList():
    year = getCurrentYear()
    date = datetime.date(year, 1, 1)
    list = []

    for i in range(366):
        date_str = str(date.month) + "月" + str(date.day) + "日"
        list.append(date_str)
        date += datetime.timedelta(days=1)

    return list


def getEventText(year, event):
    text = "%s：%s" % (year, event)
    text = re.sub(r"\[\S*?\]", "", text)  # 去除引用标记
    text = text.strip("。；")  # 去除末尾符号

    return text


def parseLiItem(liItem):
    text = liItem.get_text().strip()
    match = re.compile("((^前|^)\d{1,4}年)：([\s\S]*$)").match(text)
    list = []

    if match:
        year = match.group(1)
        events = filter(lambda x: len(x) < EVENT_MAX_LENGTH,
                        match.group(3).strip().split("\n"))
        list = map(lambda x: getEventText(year, x), events)

    return list


def getDayEvents(html):
    # Find the main 大事记 section
    main_section_pattern = re.compile(
        r'<div class="mw-heading mw-heading2"><h2 id=\"大事[记記纪紀]\">.*?</h2>.*?</div>([\s\S]*?)<div class="mw-heading mw-heading2">')
    main_match = main_section_pattern.search(html)

    list = []

    if main_match:
        # Get all content between 大事记 and the next main heading
        content = main_match.group(1)

        # Process all <li> elements within this section (across all subsections)
        bsObj = BeautifulSoup(content, "html.parser").findAll("li")
        for li in bsObj:
            list.extend(parseLiItem(li))
    else:
        print("未找到大事记部分")

    print("共有 %s 条" % list.__len__())

    return list


def main():
    dateList = getDateList()
    data = {}

    for date in dateList:
        print("正在获取 %s 的数据..." % date)
        r = requests.get("https://zh.wikipedia.org/wiki/%s" %
                         date, headers={'Accept-Language': 'en-US,zh-CN;q=0.5'})
        events = getDayEvents(r.text)
        dd = datetime.datetime.strptime(date, "%m月%d日")

        if (data.get(dd.month) == None):
            data[dd.month] = {}
        data[dd.month][dd.day] = events

    with open("../src/data/today_in_history.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
