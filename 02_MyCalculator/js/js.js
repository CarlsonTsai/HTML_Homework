var outPut = document.getElementById('outPut')

var patt = /[+ \-\ * / . ]{2}/;

//用於 +/- 符號 只能輸入一次
var patt1 = /[ \-\ ]{1}/;

//數字
function numbtn(btn) {
    switch (btn) {
        // 判斷不能重複點擊運算符
        case "+":
                outPut.value += btn;
                // 判斷當input沒有值時不能輸入運算符
                outPut.value == '+' ? outPut.value = "" : outPut.value
                deleoOper();
                break;
        case "-":
                outPut.value += btn;
                outPut.value == '-' ? outPut.value = "" : outPut.value
                deleoOper();
                break;
        case "*":
                outPut.value += btn;
                outPut.value == '*' ? outPut.value = "" : outPut.value
                deleoOper();
                break;
        case "/":
                outPut.value += btn;
                outPut.value == '/' ? outPut.value = "" : outPut.value
                deleoOper();
                break;
        case ".":
                outPut.value += btn;
                outPut.value == '.' ? outPut.value = "" : outPut.value
                deleoOper();
                break;
        case "%":
                if(outPut.value.indexOf('+') != -1 || outPut.value.indexOf('-') != -1 || outPut.value.indexOf('*') != -1 || outPut.value.indexOf('/') != -1){
                    return;
                }
                outPut.value == '' ? outPut.value == '' : outPut.value /= 100;
                break;
        case "+/-":
                if (patt1.test(outPut.value)) {
                    return outPut.value;
                } else if (outPut.value == '' || outPut.value == 0) {
                    outPut.value != '-'
                } else {
                    outPut.value = '-' + outPut.value
                }
                break;
        case "=":
                //判斷是否為undefined           //使用eval方法直接從input的value進行運算
                if (outPut.value) outPut.value = eval(outPut.value)
                break;
        case "C":
                // 清掉號碼
                outPut.value = ""
                break;
        default:
                // 當點擊數字把0蓋過
                outPut.value == 0 ? outPut.value = btn : outPut.value += btn;
                break;
    }
}

function deleoOper() {
    if (patt.test(outPut.value)) {
        //取得value值把多的運算符去掉
        var deleOp = outPut.value.slice(0, -1);
        outPut.value = deleOp;
    }
}





