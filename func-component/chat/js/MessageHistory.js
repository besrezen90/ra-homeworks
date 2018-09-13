'use strict';
MessageHistory.defaultProps = {list: []};

function MessageHistory({list}) {
    const listMessages = list.map(message => {
        return (
            message.type === 'message' && <Message from={message.from} message={message} /> ||
            message.type === 'response' && <Response from={message.from} message={message} /> ||
            message.type === 'typing' && <Typing from={message.from} message={message} />
        );
    })


    return (<ul> {listMessages} </ul>);

}
