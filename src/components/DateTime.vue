<script setup lang="ts">
import { useNextHolidayApi } from '../composables/useNextHolidayApi'
import { useTodayInfoApi } from '../composables/useTodayInfoApi'
import { getTime, getWeekday, getYear, getMonth, getDay } from '../helpers/date'
import type { IContentBaseProps } from '../types'

const props = defineProps<IContentBaseProps>()
const { isDayOff } = useTodayInfoApi(props.date)
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
    <p v-if="isDayOff">今天是<span class="hightlight">休息日</span>，放松一下吧</p>
    <p v-else>
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
