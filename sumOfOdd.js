let x,n,sum;
n=parseInt(prompt("Enter odd number for sum from 1:"));
sum=0;
if(n%2==1)
{
for(x=1;x<=n;x=x+2)
{
    sum=sum +x;
}
console.log(sum);
}
else{
    console.log("please Enter odd number")
}