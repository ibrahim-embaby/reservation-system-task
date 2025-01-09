import Branch from "./Branch";

function BranchList({ branches, setBranches }) {
  const addBranch = () => {
    setBranches((prev) => [
      ...prev,
      { branch: "", startingTime: "", endingTime: "", workingDays: [] },
    ]);
  };
  const removeBranch = (indexToRemove) => {
    setBranches((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const updateBranch = (index, updatedBranch) => {
    setBranches((prev) =>
      prev.map((branch, i) => (i === index ? updatedBranch : branch))
    );
  };

  const getAllSelectedDays = () => {
    const allSelectedDays = new Set();
    branches.forEach((branch) => {
      branch.workingDays.forEach((day) => allSelectedDays.add(day));
    });
    return Array.from(allSelectedDays);
  };
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-[30px]">
      {branches.map((branch, index) => (
        <Branch
          key={index}
          index={index}
          branchData={branches[index]}
          updateBranch={updateBranch}
          disabledDays={getAllSelectedDays()}
        />
      ))}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <p
          className="font-semibold underline text-sm sm:text-[14px] cursor-pointer hover:text-primary transition-colors"
          onClick={addBranch}
        >
          Add another branch
        </p>
        <p
          className="font-semibold text-[#00000059] text-sm sm:text-[14px] cursor-pointer hover:text-red-500 transition-colors"
          onClick={() =>
            branches.length > 1 && removeBranch(branches.length - 1)
          }
        >
          Clear Branch
        </p>
      </div>
    </div>
  );
}

export default BranchList;
