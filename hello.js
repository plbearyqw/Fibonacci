function fibonacci(n){
          if(n <= 0 ){
                    return;
          }
          else if(n == 1){
                    return 0;
          }
          else if(n == 2){
                    return 1;
          }
          else if(n >= 3){
                    return fibonacci(n - 1) + fibonacci(n - 2);
          }
}
