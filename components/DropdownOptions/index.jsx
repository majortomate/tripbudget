/* eslint-disable jsx-a11y/anchor-is-valid */
function DropdownOptions() {
  return (
    <div id="dropdown" className="z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute m-0 translate-y-0 translate-x-3" style={{ inset: '60px auto auto 270px' }}>
      <ul className="py-1">
        <li>
          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownOptions;
