const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String, // 문자열
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,    // trim -> qwerty babo@gmail.com 같이 스페이스, 공백을 없애주는 역할
        unique: 1    // 똑같은 이메일은 쓰지 못하게 함
    },
    password: {
        type: String,
        minlength: 6
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,    // 관리자, 일반 유저의 역할을 설정
        default: 0    //ex 롤을 주지 않으면 0 값으로 한다.
    },
    image: String,   // {}같은 오브젝트를 주지 않고 String만 입력해도 가능하다.
    token: {         // 유효성 같은 것을 관리
        type: String
    },
    tokenExp: {       // token이 사용할 수 있는 기간 부여
        type: Number
    }
})

const User = mongoose.model('User',userSchema)     // model을 지정

module.exports = { User }     // 다른 곳에서도 쓸 수 있게 export 하는 것