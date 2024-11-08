import { useState, useEffect, useRef, ChangeEvent } from "react";

interface UseSearchResult {
  searchTerm: string;
  searchData: string | null;
  open: boolean;
  setOpen: (value: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  toggleSearch: () => void;
}

const useSearch = (): UseSearchResult => {
  const [open, setOpen] = useState(false);
  const [searchData, setSearchData] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setOpen((prev) => !prev);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleSearch();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleFocus = () => {
    setOpen(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setSearchData(term);
    if (term.length > 0) {
      setOpen(true);
    }
  };

  return {
    searchTerm,
    searchData,
    open,
    setOpen,
    inputRef,
    handleSearchChange,
    handleFocus,
    handleBlur,
    toggleSearch,
  };
};

export default useSearch;
