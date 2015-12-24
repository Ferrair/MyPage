/**
 * Created by WQH on 15/12/20.
 * 用于检测用户的表单输入
 */
function CheckInput() {
    /**
     * 判断输入是否为空
     * @param field 表单的一个输入框
     * @param alertText 警告的文本
     */
    this.isEmpty = function (field, alertText) {
        with (field) {
            if (value == null || value == "") {
                alert(alertText);
                field.focus();
                return false;
            }
            else {
                return true;
            }
        }
    }

    /**
     * 判断是否为Email形式
     * @param field  表单的一个输入框
     * @param alertText 警告的文本
     */
    this.isEmail = function (field, alertText) {
        with (field) {
            //JS 正则表达式要在/ /之间,不使用双引号
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (!reg.test(value)) {
                alert(alertText);
                field.focus();
                return false;
            }
            else
                return true;
        }
    }
}



