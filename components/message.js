import React from "react";
import styles from "../styles/Message.module.css";

export default function Message({ message, isMe }) {
    const today = new Date(message.createdAt);
    var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    var time =
        today.getHours() + ":" + today.getMinutes()
    var dateTime = date + " " + time;
    if (user) {
        return (
            <div
                className={
                    isMe
                        ? styles.sentMessageContainer
                        : styles.receivedMessageContainer
                }
            >
                <p className={styles.senderText}>{message.owner}</p>
                <div
                    className={
                        isMe ? styles.sentMessage : styles.receivedMessage
                    }
                >
                    <p>{message.message}</p>
                    <span className={styles.date}>{dateTime}</span>
                </div>
            </div>
        );
    } else {
        return <p>Loading...</p>;
    }
}
