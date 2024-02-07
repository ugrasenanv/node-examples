var sum = 0;
var nbArgs = [1,2,3,4,5,6,7,8];
for (i=2; i<nbArgs.length; i++) {
	sum += Number(nbArgs[i]);
}
console.log(sum);