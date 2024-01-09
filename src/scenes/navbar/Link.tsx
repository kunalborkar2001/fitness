
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage //Anytime we have a space we will remove it 

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage} ? 'text-primary-500' : "" transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link