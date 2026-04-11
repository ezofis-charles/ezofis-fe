import dayjs from 'dayjs'

const formatDatetime = (
  date: Date | string,
  format: 'date' | 'datetime' | 'time' | string = 'date',
) => {
  switch (format) {
    case 'date': {
      return dayjs(date).format('DD-MMM-YYYY')
    }
    case 'time': {
      return dayjs(date).format('HH:mm A')
    }
    case 'datetime': {
      return dayjs(date).format('DD-MMM-YYYY HH:mm A')
    }
    default: {
      return dayjs(date).format(format || 'DD-MMM-YYYY HH:mm A')
    }
  }
}

export { formatDatetime }
