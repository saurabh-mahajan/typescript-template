export const primeFactorization = (n : number) => {

       var primeFactors: number[] = [];
       if(n==0){
           return primeFactors
       }
       while(n%2==0){
            primeFactors.push(2)
            n=n/2
       }
       for (var i = 3; i <= Math.sqrt(n); i = i + 2)
       {
               while (n % i == 0)
               {
                   primeFactors.push(i)
                   n = n/i;
               }
       }

       if (n > 2){
            primeFactors.push(n)
       }
       return primeFactors
}
