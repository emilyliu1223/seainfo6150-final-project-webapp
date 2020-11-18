import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
function Instagram(props) {
    return (
        <div className="d-block w-100">
              <InstagramEmbed
     url={props.url}
     clientAccessToken='1235776406796371
     |015686787614ae3c8677c80b62861cc0'
    maxWidth={320}
hideCaption={false}
containerTagName='div'
protocol=''
injectScript
onLoading={() => {}}
onSuccess={() => {}}
onAfterRender={() => {}}
onFailure={() => {}}
/>
        </div>
    )
}

export default Instagram
