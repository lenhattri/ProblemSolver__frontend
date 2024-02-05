/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
  Textarea,
  HStack,
  Text,
  Box,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import hachikuji from "../../assets/hachikuji.jpg";
import { PuffLoader } from "react-spinners";
import difficultyFetch from "./fetch/difficultyFetch";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [prompt, setPrompt] = useState("");
  const [difficulty, setDifficulty] = useState({});
  const [loadingDifficulty, setLoadingDifficulty] = useState(false);

  const promptForm = {
    appName: "ProblemSolver",
    inputLabel: "Nhập đề bài",
    inputPlaceholder: "Nhập đề bài tại đây...",
    inputHelperText: "Hãy nhập đề bài mà bạn muốn xem lời giải!",
    buttonValue: {
      content: "Solve",
      handleSubmit: async (event) => {
        event.preventDefault();
        setLoadingDifficulty(true);
        setPrompt(inputValue);
        const difficultyData = await difficultyFetch(inputValue);
        console.log(difficultyData.data);
        setInputValue("");
        setDifficulty(difficultyData.data);
        setLoadingDifficulty(false);
      },
    },
  };
  return (
    <>
      <Box w={"100%"} display={"flex"} justifyContent={"center"} mt={20}>
        <Box
          boxShadow={"xl"}
          as={"div"}
          border={"2px solid #ef95aa"}
          rounded={"md"}
          w={"40%"}
          p={10}
        >
          <Box>
            <HStack>
              <Avatar src={hachikuji} size={"xl"} mr={5}></Avatar>
              <Text fontWeight={"bold"} fontSize={50} fontFamily={"roboto"}>
                {promptForm.appName}<span style={{ color: "#fe4670" }}>.AI</span>
              </Text>
            </HStack>
          </Box>
          <Box mt={7}>
            <form onSubmit={promptForm.buttonValue.handleSubmit}>
              <FormControl>
                <FormLabel>{promptForm.inputLabel} </FormLabel>
                <Textarea
                  backgroundColor={"pink.50"}
                  focusBorderColor={"crimson"}
                  placeholder={promptForm.inputPlaceholder}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <FormHelperText>{promptForm.inputHelperText}</FormHelperText>
                <Button mt={4} colorScheme={"pink"} type={"submit"}>
                  {promptForm.buttonValue.content}
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Box>

      <Box maxW={"50%"} mx={"auto"} mt={20} spacing={5}>
        {prompt && loadingDifficulty && <PuffLoader color="#d636a7" />}
        {prompt && !loadingDifficulty && (
          <>
            <Box>
              <Divider borderWidth={1} borderColor={"black.300"} mb={10} />
              <Text>
                <Text as={"b"}>Độ khó:</Text>{" "}
                <Text
                  as={"b"}
                  color={
                    difficulty === "Medium"
                      ? "yellow.700"
                      : difficulty === "Easy"
                      ? "green.700"
                      : "red.700"
                  }
                >
                  {difficulty}
                </Text>
              </Text>
              <Text>Đề bài: {prompt}</Text>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
