<script setup lang="ts">
import { useNextHolidayApi } from '../composables/useNextHolidayApi'
import { getTime, getWeekday, getYear, getMonth, getDay } from '../helpers/date'

interface IDateTimeProps {
  date: Date
}

const props = defineProps<IDateTimeProps>()
const { name, rest } = useNextHolidayApi(props.date)
</script>

<template>
  <section id="datetime">
    <p id="moment">{{ getTime(props.date) }}</p>
    <p>
      今天是<span class="hightlight">{{ getYear(props.date) }}</span
      >年<span class="hightlight">{{ getMonth(props.date) }}</span
      >月<span class="hightlight">{{ getDay(props.date) }}</span
      >日<span class="hightlight">{{ getWeekday(props.date) }}</span>
    </p>
    <p>
      距离下一个休息日<span class="hightlight">{{ name }}</span
      >还有<span class="hightlight">{{ rest }}</span
      >天
    </p>
  </section>
</template>

<style scoped>
p {
  font-size: 18px;
  margin: 4px;
  line-height: 1.4;
}

.hightlight {
  font-size: 24px;
  font-weight: bold;
  margin: 6px;
}

#datetime {
  text-align: center;
  margin-bottom: 24px;
}

#moment {
  font-size: 80px;
  font-weight: bold;
  line-height: 1.2;
}
</style>
