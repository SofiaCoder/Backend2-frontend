import { Navbar } from "../../components/Navbar/Navbar";
import { PostContainer } from "./PostContainer/PostContainer";

export function MainPage(){

  return (<div>
    <Navbar/>
    <h1>Flow</h1>
    <PostContainer/>
  </div>)
}