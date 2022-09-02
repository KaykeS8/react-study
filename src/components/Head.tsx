interface PropsHead {
  title: string;
  description:string;
}

export const Head = ({title, description}: PropsHead) => {
  document.title = "Ranek | " + title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  return <></>;
};
