/**
 * Created by WQH on 15/12/20.
 */
function countDown(secs, surl) {
    //alert(surl);
    var jumpTo = document.getElementById('jumpTo');
    jumpTo.innerHTML = secs;
    if (--secs > 0) {
        setTimeout("countDown(" + secs + ",'" + surl + "')", 1000);
    }
    else {
        location.href = surl;
    }
}
