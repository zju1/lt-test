/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack } from "@mui/material";
import { IBookResponse } from "../../../app/api/api.service";
import {
  BookCardAuthor,
  BookCardImage,
  BookCardTitle,
  BookCardWrapper,
  BookStatus,
} from "./book-card.s";

const statuses = ["New", "Reading", "Finished"];

export function BookCard(props: IBookResponse) {
  const { author, cover, id, title } = props.book;

  return (
    <BookCardWrapper>
      <BookCardImage
        src={cover || `https://picsum.photos/id/${id + 10}/300/350`}
        loading="lazy"
        alt={title || `${id}-book`}
      />
      <Stack>
        <BookCardTitle> {title || "Unknown title"} </BookCardTitle>
        <BookCardAuthor> {author || "Unknown author"} </BookCardAuthor>
      </Stack>
      <BookStatus data-status={props.status}>
        {statuses[props.status]}
      </BookStatus>
    </BookCardWrapper>
  );
}
