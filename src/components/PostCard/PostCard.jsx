import { Card, Icon, Image } from "semantic-ui-react";

function PostCard({ post, isProfile, addLike,user, deleteLike }) {

  const likedIndex = post.likes.findIndex(like => like.userId === user._id)

  const likeColor = likedIndex > -1? 'red' : 'gray';

  const handleClick = likedIndex > -1 ? () => deleteLike(post.likes[likedIndex]._id) : () => addLike(post._id);

  return (
    <Card key={post._id}>
      {isProfile ? null : (
        <Card.Content textAlign="left">
          <Image
            floated="left"
            size="large"
            avatar
            src={
              post.user.photoUrl
                ? post.user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
          />
          <Card.Header floated="right">{post.user.username}</Card.Header>
        </Card.Content>
      )}

      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{post.caption}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon name={"heart"} size="large" color={likeColor} onClick={handleClick} />
        {post.likes.length} Likes
      </Card.Content>
    </Card>
  );
}

export default PostCard;
