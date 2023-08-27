import React, { FC, useMemo, useState, useCallback } from "react";
import { PostInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { ContentWrapper } from "../shared/Common";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardUserInterface } from "../users/types";
import { RxAvatar } from "react-icons/rx";
import { CommentInterface } from "../comments/types";
import { FaRegComments } from "react-icons/fa";

interface PropsInterface {
  post: PostInterface;
}

export const PostItem: FC<PropsInterface> = ({ post }) => {
  const options = useMemo(() => ({ method: "GET" }), []);
  const [isShowComments, setIsShowComments] = useState<boolean>(false);

  const { body, id, userId, title } = post;

  const { data, isLoading } = useFetchData<DashboardUserInterface>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    options
  );

  const { data: comments, isLoading: isCommentsLoading } = useFetchData<
    CommentInterface[]
  >(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, options);

  const onShowCommentsToggle = useCallback(() => {
    setIsShowComments(!isShowComments);
  }, [isShowComments]);

  console.log(data, "USER");

  return (
    <ContentWrapper flexDirection="column" alignItems="center" width="80% !important">
      <FlexRow alignItems="center" gap="10px">
        
        <FlexRow alignItems="center" gap="20px"> <RxAvatar size={40} /><h2>{data?.username}</h2></FlexRow>
       
        <span>{data?.email}</span>
      </FlexRow>
      <h3>{title.toUpperCase()}</h3>
      <FlexRow fontSize="21px" margin="10px" width="60%"><span>{body}</span></FlexRow>
      

      <FlexColumn margin="10px 0">
        <button onClick={() => onShowCommentsToggle()}>
          {isShowComments ? "Hide" : "Show"} comments
        </button>
      </FlexColumn>

      {isShowComments && (
        <FlexColumn margin="10px" width="50%" alignItems="center">
          {comments?.map(({ name, body }) => (
            <ContentWrapper
              flexDirection="row"
              alignItems="center"
              gap="10px"
              margin="5px"
              background="darkgrey !important"
              justifyContent="space-between"
            >
              <FlexRow alignItems="center" gap="10px">
                <FaRegComments size={30} />
                <h4>{name}</h4>
              </FlexRow>
              <FlexRow width="50%">
                <p>{body}</p>
              </FlexRow>
            </ContentWrapper>
          ))}
        </FlexColumn>
      )}
    </ContentWrapper>
  );
};