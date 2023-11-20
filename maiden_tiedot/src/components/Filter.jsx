// vastaa filtteröintikyselystä

const Filter = ({ newCondition, handleSearch }) => {

  return (
    <div>
      find countries <input value={newCondition} onChange={handleSearch} />
    </div>
  )
}

export default Filter