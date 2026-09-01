import dayjs from "dayjs"

export function getDate(offset) {
    return dayjs().add(offset, 'day').format('dddd, MMM DD')
}