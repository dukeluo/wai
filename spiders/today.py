# -*- coding: utf_8 -*-
import requests
import string
from bs4 import BeautifulSoup
import datetime
import re
import json

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
    text = text.strip("。") # 去除末尾句号

    return text


def parseLiItem(liItem):
    text = liItem.get_text().strip()
    match = re.compile("((^前|^)\d{1,4}年)：([\s\S]*$)").match(text)
    list = []

    if match:
        year = match.group(1)
        events = match.group(3).strip().split("\n")
        list = map(lambda x: getEventText(year, x), events)

    return list

def getDayEvents(html):
    match = re.compile("(<span class=\"mw-headline\" id=\"大事[记記纪紀]\">[\s\S]*?)<h2>").search(html)
    list = []

    if match:
        bsObj = BeautifulSoup(match.group(1), "html.parser").findAll("li")
        for li in bsObj:
            list.extend(parseLiItem(li))
    print("共有 %s 条" %  list.__len__())

    return list

def main():
    dateList = getDateList()
    data = {}

    for date in dateList:
        print("正在获取 %s 的数据..." % date)
        r = requests.get("https://zh.wikipedia.org/zh-cn/%s" % date)
        events = getDayEvents(r.text)
        dd = datetime.datetime.strptime(date, "%m月%d日")

        if (data.get(dd.month) == None):
            data[dd.month] = {}
        data[dd.month][dd.day] = events

    with open("../src/data/today_in_history.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    main()