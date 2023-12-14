import http from "http"
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug")
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => res.render("home"));
app.get("*", (req, res) => res.redirect("/")); // 다른 url 사용 안할 예정

const handleListen = () => console.log(`Listening on http://localhost:3000`) // 프로토콜에 ws를 입력할 수도 있다.

const server = http.createServer(app);

/**
 * 이렇게 하면 http 서버, webSocket서버 둘 다 돌릴 수 있다.
 * 이러면 동일한 포트에서 http, 웹소켓 요청 두개를 다 처리할 수 있다.
 */
const wss = new WebSocket.Server({server})
server.listen(3000, handleListen)