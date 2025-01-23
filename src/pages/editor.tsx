import React from "react";
import _Editor from "@monaco-editor/react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useAppDispatch } from "../app/hooks";

import { setMarkDown } from "../app/reducers/cvDataSlice"

import { Box, Tab, Container, Typography, Input } from "@mui/material";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
}

const Editor = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState("1");

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log('event', event)
    setValue(newValue);
    dispatch(setMarkDown("test"));
  };

  function handleEditorChange() {
    console.log("here is the current model value:", value);
  }

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Markdown" value="1" />
              <Tab label="Form" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <_Editor
              width="90vh"
              height="90vh"
              defaultLanguage="markdown"
              defaultValue="// some comment"
              onChange={handleEditorChange}
            />
          </TabPanel>
          <TabPanel value="2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <input type="submit" />
            </form>
          </TabPanel>
        </TabContext>
        <Box>
          <Container>
            <Typography>Preview</Typography>
          </Container>
        </Box>
      </Box>
    </div>
  )
};

export default Editor;