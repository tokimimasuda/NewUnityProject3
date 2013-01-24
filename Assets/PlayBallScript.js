#pragma strict

function Start () {// 開始時は重力影響なし
this.rigidbody.useGravity = false;

}

function Update () {// マウスクリックで重力開始
if (Input.GetButtonDown("Fire1")) {
this.rigidbody.useGravity = true;
}

}