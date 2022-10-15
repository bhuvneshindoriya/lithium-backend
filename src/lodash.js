// const aa1 = function(){
const lodash_chunk=require('lodash')
const monthsname =["January","February","March","April","May","June","july","August","September","October","November","December"]
let chunk_arr = lodash_chunk.chunk(monthsname,4)

module.exports.chunk_arr=chunk_arr


const lodash_tail=require('lodash')
const tailarr =[1,3,5,7,9,11,13,15,17,19]
const tail_arr = lodash_tail.tail(tailarr)
module.exports.tail_arr=tail_arr

const lodash_union=require('lodash')
const A = [1,3,5,7,3,5]
const B = [2,8,9,11,2,9]
const C = [11,15,17,19,17]
const D = [ 12,13,15,19,12]
const union_arr = lodash_union.union(A,B,C,D)
module.exports.union_arr=union_arr

const lodash_=require('lodash')
const lodash_arr =  [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
const lodash_frompairs= lodash_.fromPairs(lodash_arr)
module.exports.lodash_frompairs=lodash_frompairs