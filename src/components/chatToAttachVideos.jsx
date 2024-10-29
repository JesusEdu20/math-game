import { useState } from "react"
import "./chatToAttachVideos.css";

function ChatToAttachVideos(){
    const [ useMessages, setMessages ] = useState([])
    const sendMessageHandler = (e) => {
        const input = e.target.closest('div').querySelector('input');
      

        const url = input.value.trim();
        const videoIdMatch = url.match(/\/video\/(\d+)/);

        if (videoIdMatch) {
            const videoId = videoIdMatch[1];
             // Crear el HTML para embeber el video de TikTok
            const embeddedVideo = `
            <blockquote class="tiktok-embed" cite="${url}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;">
                <section>
                <a target="_blank" title="@poppy.reddit" href="${url}">Ver en TikTok</a>
                </section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
            `;
             // Actualizar los mensajes con el nuevo mensaje embebido
            setMessages([...useMessages, embeddedVideo]);
            input.value = ""  
        } else {
            alert("Por favor ingresa una URL válida de TikTok.");
        }

    }
    console.log(useMessages)
    return (
        <div className="chat-to-attach-videos">
            <section className="chat-screen">
            {  // arreglar lo de las llaves, no debe ser el index
                useMessages.map(( message, index ) => {
                    return (
                        <p className="chat-message" 
                           key={index}
                           dangerouslySetInnerHTML={{ __html: message }}>
                            
                        </p>
                    )
                })
            }
            </section>
            <div className="chat-input__container">
                <input type="text"></input>
                <button onClick={sendMessageHandler}>Enviar</button>
            </div>
        </div>
    )
}

export default ChatToAttachVideos