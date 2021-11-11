export function hideemail(email) {
   return email.replace(/^(.{5})[^@]+/, "$1****");
}
// export{hideemail}