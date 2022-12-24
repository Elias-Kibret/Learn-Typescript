
type StringOrNum = string | number
type ObjWithNum={name:string ,uid:StringOrNum}
const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid} `)
}
const great = (user: ObjWithNum) => {
    console.log(`${user}`)
}