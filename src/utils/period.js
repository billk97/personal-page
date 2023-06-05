export default {

    calculatePeriod(start, end) {
        let startDate = new Date(start)
        if (!end){
            end = new Date()
        }
        let endDate = new Date(end)
        let perionInDays = (endDate - startDate) / 1000 / 60/ 60 / 24
        let periodInMonths = Math.floor(perionInDays / 30)
        console.log('months '+ periodInMonths)
        if (periodInMonths < 12) {
            return `${ periodInMonths } months`
        }
        console.log(periodInMonths % 12)
        return `${Math.floor( periodInMonths / 12)} years and ${periodInMonths % 12} months`
    },

    convertToSuperSortDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-GB', {month: 'numeric', year: 'numeric'})
    }

}