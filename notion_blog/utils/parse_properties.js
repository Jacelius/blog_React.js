import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export const parseProperties = (database) =>
  database.results.map((row) => {
    console.log("row", row);
    const id = row.id;
    const titleCell = row.properties.Title.title;
    console.log("tc", titleCell)
    const title = titleCell?.[0].plain_text;
    // const title = "test title"
    return { id, title };
  }); 