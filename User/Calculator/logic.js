var DisplayArray = [];  // Untuk tampilan
        var CalculationArr = [];  // Untuk perhitungan
        var optClicked = false;
        var Display = document.getElementById('display');
    
        function RenderDisplay() {
            if (DisplayArray.length === 0) {
                Display.innerHTML = "0";
            } else {
                Display.innerHTML = DisplayArray.join("");
            }
        }
    
        RenderDisplay();
    
        function btnnumber(number) {
            if (optClicked) {
                DisplayArray.push(" "); // Tambahkan spasi setelah operator
            }
            if (CalculationArr.length === 0 || isNaN(CalculationArr[CalculationArr.length - 1])) {
                CalculationArr.push(number.toString()); 
            } else {
                CalculationArr[CalculationArr.length - 1] += number.toString(); // Gabungkan angka
            }
            DisplayArray.push(number);
            optClicked = false;
            console.log(CalculationArr)
            RenderDisplay();
        }
    
        function btnoperator(operator) {
            if (!optClicked) {
                var converter;
                switch(operator){
                    case ('*'):
                    converter = "x"
                    break;
                    
                    case ('/'):
                    converter = "÷"
                    break;

                    default:
                    converter = operator;
                }

                DisplayArray.push(' ' + converter);
                CalculationArr.push(operator);
                optClicked = true;
            }
            console.log(CalculationArr)
            RenderDisplay();
        }
    
        function btnequal() {
            if (CalculationArr.length > 0 && !optClicked) {
                try {
                    let result = eval(CalculationArr.join("")); 
                    DisplayArray = [result];  
                    CalculationArr = [result.toString()];  
                } catch (error) {
                    DisplayArray = ["Error"];
                    CalculationArr = [];
                }
                console.log(CalculationArr)
                RenderDisplay();
            }
        }

        //bug
        //function btnbckspc() {
        //    if (DisplayArray.length > 0) {
        //        DisplayArray.pop();
        //        CalculationArr.pop();
        //    }
        //    console.log(CalculationArr)
        //    RenderDisplay();
        //}
    
        function BtnAC() {
            DisplayArray.length = 0;
            CalculationArr.length = 0;
            optClicked = true
            console.log(CalculationArr)
            RenderDisplay();
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }
