const nums = [1,2,3,4,5]

let nums2 = nums.map(function(e){
    return e * 10
})

console.log(nums2)

const soma10 = e => e + 10
const triplo = e => e * 3
const reais = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

nums2 = nums.map(soma10).map(triplo).map(reais)
console.log(nums2)