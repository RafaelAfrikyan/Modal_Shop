import React, { useEffect, useState } from "react";

export default function Modal(id, title, totalCount, addCount) {
  return (
    <div>
      {totalCount > 0 && (
        <div className="backet">
          <div>
            {title} - {totalCount}
          </div>
          <button onClick={() => addCount(id)}> +</button>
        </div>
      )}
    </div>
  );
}
