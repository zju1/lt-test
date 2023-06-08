/* eslint-disable @typescript-eslint/no-explicit-any */
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

export function BookCard(
  props: IBookResponse & {
    onClick: (values: IBookResponse) => void;
  }
) {
  const { author, cover, id, title } = props.book;

  return (
    <BookCardWrapper
      disableRipple
      onClick={() => props.onClick({ book: props.book, status: props.status })}
    >
      <BookCardImage
        src={cover || `https://picsum.photos/id/${id + 10}/300/350`}
        loading="lazy"
        alt={title || `${id}-book`}
      />
      <Stack sx={{ width: "100%", height: 80 }}>
        <BookCardTitle> {title || "Unknown title"} </BookCardTitle>
        <Stack
          sx={{ width: "100%" }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <BookCardAuthor> {author || "Unknown author"} </BookCardAuthor>
        </Stack>
      </Stack>
      <BookStatus data-status={props.status}>
        {statuses[props.status]}
      </BookStatus>
    </BookCardWrapper>
  );
}
