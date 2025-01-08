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
    <div className="flex flex-col gap-[30px]">
      {branches.map((branch, index) => (
        <Branch
          key={index}
          index={index}
          branchData={branches[index]}
          updateBranch={updateBranch}
          disabledDays={getAllSelectedDays()}
        />
      ))}
      <div className="flex justify-between items-center">
        <p
          className="font-semibold underline text-[14px] cursor-pointer"
          onClick={addBranch}
        >
          Add another branch
        </p>
        <p
          className="font-semibold text-[#00000059] text-[14px] cursor-pointer"
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
