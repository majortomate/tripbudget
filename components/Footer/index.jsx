/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
  return (

    <footer className="px-4 py-2 bg-knowhere-dark-blue shadow md:px-6 md:py-4 dark:bg-gray-800">
      <span className="block text-md text-white text-center dark:text-gray-300">
        © 2022
        {' '}
        <a href="/" className="hover:underline">TripBudget™</a>
        . All Rights Reserved. Built by
        {' '}
        <a href="https://www.linkedin.com/in/majortomate/" target="_blank" rel="noreferrer">Majortomate</a>
      </span>
    </footer>

  );
}

export default Footer;
