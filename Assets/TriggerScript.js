#pragma strict
private var goalFlag : boolean;

function Start () {// 実行前に行われる
goalFlag = false;

}

function OnTriggerEnter (other : Collider) { // トリガー進入時に行われる
if (other.gameObject.tag.Equals("PlayerBallTag")) {
goalFlag = true;
}
}
function OnTriggerExit (other : Collider) { // トリガー退場時に行われる
}

function OnGUI () { // GUI 処理を記述する特別なメソッド
if (goalFlag == true) {
GUI.Label(Rect(10, 10, Screen.width - 20, Screen.height - 20), "Goal!");
}
}

function Update () {

}