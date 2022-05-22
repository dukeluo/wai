<script setup lang="ts">
import { useMoment } from '../composables/useMoment'
import { useNextHolidayApi } from '../composables/useNextHolidayApi'
import { getTime, getWeekday, getYear, getMonth, getDay } from '../helpers/date'

const { moment } = useMoment()
const { name, rest } = useNextHolidayApi(moment.value)
</script>

<template>
  <section id="datetime">
    <p id="moment">{{ getTime(moment) }}</p>
    <p>
      今天是<span class="hightlight">{{ getYear(moment) }}</span
      >年<span class="hightlight">{{ getMonth(moment) }}</span
      >月<span class="hightlight">{{ getDay(moment) }}</span
      >日<span class="hightlight">{{ getWeekday(moment) }}</span>
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
