/**
 * Created by WQH on 15/12/20.
 */
function validate_required(field, alertText) {
    with (field) {
        if (value == null || value == "") {
            alert(alertText);
            return false;
        }
        else {
            return true;
        }
    }
}


