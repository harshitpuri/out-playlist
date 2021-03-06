import styled from "styled-components";
import Link from "next/link";
import { Heading } from "./Heading";
import { Spacer } from "./Spacer";

const Style = styled.div`
  .tiltLeft {
    transform: rotate(-5deg);
  }
  .tiltRight {
    transform: rotate(15deg);
  }

  padding-bottom: 8px;
  border-bottom: 8px solid var(--light);
  margin-bottom: 16px;
`;

export function PageHeader() {
  return (
    <Style>
      <Heading level={1} weight={700}>
        <img
          className="tiltRight"
          src="/music-note-47px.svg"
          alt="Music Note"
        />
        <Spacer axis="horizontal" size={10} />
        <Link href="/">OutPlaylist</Link>
        <Spacer axis="horizontal" size={5} />
        <img className="tiltLeft" src="/music-note-47px.svg" alt="Music Note" />
      </Heading>

      <Heading level={4}>
        <em>
          Create the perfect playlist on demand for your run or workout ||
          Created by <a href="https://github.com/harshitpuri">Harshit Puri</a>
        </em>
      </Heading>
    </Style>
  );
}
