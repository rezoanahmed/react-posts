export default function Post({post}){
    const {id, title, body} = post;
    return (
        <div className="postBody">
            <h2>{title}</h2>
            <p><small>{id}</small></p>
            <p>{body}</p>
        </div>
    )
}