import { FC, HTMLProps, useState } from "react";

export function Tetronyms() {
  const [pieceId, setPieceId] = useState<Pieces[number]["id"] | null>(4);
  const [pieces] = useState<Pieces>(initialPieces);
  const piece = pieces.find(({ id }) => id === pieceId);
  return (
    <div className="flex flex-col-reverse items-center md:items-stretch md:grid grid-cols-2 justify-center gap-12">
      <div className="font-sans">
        <Board border width={6} height={4}>
          {piece ? (
            <PieceComponent
              piece={piece.piece}
              position={[2, 0]}
              hoverable={false}
              rotation={piece.rotation}
            />
          ) : null}
        </Board>
        <div className="mt-12 h-96 overflow-auto">
          {piece?.info ? (
            piece.info
          ) : (
            <p className="font-serif">
              Psst! Select a block to know more about stuff I've worked on
            </p>
          )}
        </div>
      </div>
      <Board border width={6} height={10}>
        {pieces.map(({ piece, rotation, position, id }) => {
          const Component = getComponent(piece);
          return (
            <Component
              key={id}
              position={position}
              rotation={rotation}
              onClick={() => setPieceId(id)}
              active={id === pieceId}
            />
          );
        })}
      </Board>
    </div>
  );
}

const initialPieces: Pieces = [
  {
    id: 1,
    piece: "T",
    position: [0, 0],
    info: (
      <>
        <h2>GraphCMS</h2>
        <a href="https://graphcms.com" target="_blank">
          https://graphcms.com
        </a>
        <p>
          Been working as a full stack developer at GraphCMS since 2018 as part
          of a team full of inspiring professionals.
        </p>
      </>
    ),
  },
  {
    id: 2,
    piece: "S",
    position: [3, 0],
    info: (
      <>
        <h2>Fullstack GraphQL</h2>
        <a href="https://graphql.college/fullstack-graphql" target="_blank">
          https://graphql.college/fullstack-graphql
        </a>
        <p>
          Wrote an open source book that teaches how to build fullstack GraphQL
          applications
        </p>
      </>
    ),
  },
  {
    id: 3,
    piece: "Z",
    position: [2, 1],
    info: (
      <>
        <h2>APILeaf</h2>
        <a href="https://apileaf.com" target="_blank">
          https://apileaf.com
        </a>
        <p>Built this visual tool to build GraphQL internal apps</p>
      </>
    ),
  },
  {
    id: 4,
    piece: "O",
    position: [1, 3],
    info: (
      <>
        <h2>GraphQL Admin</h2>
        <a href="https://graphqladmin.com" target="_blank">
          https://graphqladmin.com
        </a>
        <p>
          No-code UI for GraphQL APIs. Scans your types, writes queries for you
          and presents data with a clean, functional UI.
        </p>
        <p>I love building tools that help people build stuff</p>
      </>
    ),
  },
  // {
  //   id: 5,
  //   piece: "I",
  //   position: [0, 1],
  // },
  // {
  //   id: 6,
  //   piece: "L",
  //   position: [3, 2],
  // },
  // {
  //   id: 7,
  //   piece: "J",
  //   position: [4, 3],
  // },
  // {
  //   id: 8,
  //   piece: "J",
  //   position: [0, 5],
  //   rotation: 45,
  // },
  // {
  //   id: 9,
  //   piece: "J",
  //   position: [3, 5],
  //   rotation: 135,
  // },
  // {
  //   id: 10,
  //   piece: "J",
  //   position: [4, 4],
  //   rotation: 90,
  // },
  // {
  //   id: 11,
  //   piece: "L",
  //   position: [0, 7],
  //   rotation: 45,
  // },
  // {
  //   id: 12,
  //   piece: "L",
  //   position: [3, 7],
  //   rotation: 90,
  // },
  // {
  //   id: 13,
  //   piece: "L",
  //   position: [4, 7],
  // },
  // {
  //   id: 14,
  //   piece: "O",
  //   position: [0, 8],
  // },
];

type PieceComponent =
  | typeof TPiece
  | typeof SPiece
  | typeof ZPiece
  | typeof OPiece
  | typeof IPiece
  | typeof LPiece
  | typeof JPiece;

type PieceType = "T" | "S" | "Z" | "O" | "I" | "L" | "J";

type Pieces = Array<{
  id: number;
  piece: PieceType;
  position: Position;
  rotation?: Rotation;
  info?: JSX.Element;
}>;

const PieceComponent: FC<{
  piece: PieceType;
  position: Position;
  rotation: Rotation;
  hoverable?: PieceProps["hoverable"];
  active?: PieceProps["active"];
}> = function PieceComponent({ piece, ...rest }) {
  const Component = getComponent(piece);
  return <Component {...rest} />;
};

function Ping() {
  return (
    <div
      className="absolute top-0 right-0"
      style={{
        transform: "translate(0.375rem, -0.375rem)",
      }}
    >
      <span className="flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
      </span>
    </div>
  );
}

// - Language (Typescript)
// - Network (GraphQL)
// - Frontend (React)
// - APIs (NodeJS)
// - Full stack (Next.js)
// - Styling (Tailwind)
// - Testing (Playwright)

function getComponent(piece: PieceType): PieceComponent {
  switch (piece) {
    case "I": {
      return IPiece;
    }
    case "T": {
      return TPiece;
    }
    case "S": {
      return SPiece;
    }
    case "Z": {
      return ZPiece;
    }
    case "O": {
      return OPiece;
    }
    case "I": {
      return IPiece;
    }
    case "L": {
      return LPiece;
    }
    case "J": {
      return JPiece;
    }
  }
}

const PIECE_SIZE = 48;

function Board({
  width,
  height,
  children,
  border,
}: {
  children: any;
  width: number;
  height: number;
  border?: boolean;
}) {
  return (
    <div>
      <div
        className={`${border ? "border-2" : ""} relative box-content`}
        style={{ width: width * PIECE_SIZE, height: height * PIECE_SIZE }}
      >
        {children}
      </div>
    </div>
  );
}

function TPiece({
  position,
  hoverable,
  onClick,
  rotation,
  active,
}: PieceProps) {
  const color: Color = "purple";
  const [x, y] = position;
  return (
    <BasePiece
      onClick={() => onClick?.({ piece: "T", rotation })}
      onMouseEnter={() => onClick?.({ piece: "T", rotation })}
      hoverable={hoverable}
      active={active}
    >
      <Piece color={color} position={position} />
      <Piece color={color} position={[x + 1, y]} />
      <Piece color={color} position={[x + 2, y]} />
      <Piece color={color} position={[x + 1, y + 1]} />
    </BasePiece>
  );
}

function SPiece({
  position,
  hoverable,
  onClick,
  rotation,
  active,
}: PieceProps) {
  const color: Color = "green";
  const [x, y] = position;
  return (
    <BasePiece
      hoverable={hoverable}
      active={active}
      onClick={() => onClick?.({ piece: "S", rotation })}
      onMouseEnter={() => onClick?.({ piece: "S", rotation })}
    >
      <Piece color={color} position={position} />
      <Piece color={color} position={[x + 1, y]} />
      <Piece color={color} position={[x + 1, y + 1]} />
      <Piece color={color} position={[x + 2, y + 1]} />
    </BasePiece>
  );
}

function ZPiece({
  position,
  hoverable,
  rotation,
  onClick,
  active,
}: PieceProps) {
  const color: Color = "red";
  const [x, y] = position;
  return (
    <BasePiece
      hoverable={hoverable}
      active={active}
      onClick={() => onClick?.({ piece: "Z", rotation })}
      onMouseEnter={() => onClick?.({ piece: "Z", rotation })}
    >
      <Piece color={color} position={[x - 1, y + 1]} />
      <Piece color={color} position={[x, y + 1]} />
      <Piece color={color} position={[x, y]} />
      <Piece color={color} position={[x + 1, y]} />
    </BasePiece>
  );
}

function OPiece({
  position,
  hoverable,
  rotation,
  onClick,
  active,
}: PieceProps) {
  const color: Color = "yellow";
  const [x, y] = position;
  return (
    <BasePiece
      hoverable={hoverable}
      active={active}
      onClick={() => onClick?.({ piece: "O", rotation })}
      onMouseEnter={() => onClick?.({ piece: "O", rotation })}
    >
      <Piece color={color} position={[x, y]} />
      <Piece color={color} position={[x, y + 1]} />
      <Piece color={color} position={[x + 1, y]} />
      <Piece color={color} position={[x + 1, y + 1]} />
    </BasePiece>
  );
}

function IPiece({
  position,
  hoverable,
  rotation,
  onClick,
  active,
}: PieceProps) {
  const color: Color = "teal";
  const [x, y] = position;
  return (
    <BasePiece
      hoverable={hoverable}
      active={active}
      onClick={() => onClick?.({ piece: "I", rotation })}
      onMouseEnter={() => onClick?.({ piece: "I", rotation })}
    >
      <Piece color={color} position={[x, y]} />
      <Piece color={color} position={[x, y + 1]} />
      <Piece color={color} position={[x, y + 2]} />
      <Piece color={color} position={[x, y + 3]} />
    </BasePiece>
  );
}

function LPiece({
  position,
  rotation,
  hoverable,
  onClick,
  active,
}: PieceProps) {
  const color: Color = "orange";
  const [x, y] = position;
  if (rotation === 45) {
    /*
          .
        ...
    */
    return (
      <BasePiece
        hoverable={hoverable}
        active={active}
        onClick={() => onClick?.({ piece: "L", rotation })}
        onMouseEnter={() => onClick?.({ piece: "L", rotation })}
      >
        <Piece color={color} position={[x, y]} />
        <Piece color={color} position={[x + 1, y]} />
        <Piece color={color} position={[x + 2, y]} />
        <Piece color={color} position={[x + 2, y + 1]} />
      </BasePiece>
    );
  }
  if (rotation === 90) {
    /*
        ..
         .
         .
    */
    return (
      <BasePiece
        hoverable={hoverable}
        active={active}
        onClick={() => onClick?.({ piece: "L", rotation })}
        onMouseEnter={() => onClick?.({ piece: "L", rotation })}
      >
        <Piece color={color} position={[x, y]} />
        <Piece color={color} position={[x, y + 1]} />
        <Piece color={color} position={[x, y + 2]} />
        <Piece color={color} position={[x - 1, y + 2]} />
      </BasePiece>
    );
  }
  if (rotation === 135) {
    /*
        ...
        .
    */
    return (
      <BasePiece
        hoverable={hoverable}
        active={active}
        onClick={() => onClick?.({ piece: "L", rotation })}
        onMouseEnter={() => onClick?.({ piece: "L", rotation })}
      >
        <Piece color={color} position={[x, y]} />
        <Piece color={color} position={[x, y + 1]} />
        <Piece color={color} position={[x + 1, y + 1]} />
        <Piece color={color} position={[x + 2, y + 1]} />
      </BasePiece>
    );
  }
  /*
      .
      .
      ..
  */
  return (
    <BasePiece
      hoverable={hoverable}
      active={active}
      onClick={() => onClick?.({ piece: "L", rotation })}
      onMouseEnter={() => onClick?.({ piece: "L", rotation })}
    >
      <Piece color={color} position={[x, y]} />
      <Piece color={color} position={[x + 1, y]} />
      <Piece color={color} position={[x, y + 1]} />
      <Piece color={color} position={[x, y + 2]} />
    </BasePiece>
  );
}

function JPiece({
  position,
  rotation,
  hoverable,
  onClick,
  active,
}: PieceProps) {
  const color: Color = "blue";
  const [x, y] = position;
  if (rotation === 45) {
    /*
        .
        ...
    */
    return (
      <BasePiece
        hoverable={hoverable}
        active={active}
        onClick={() => onClick?.({ piece: "J", rotation })}
        onMouseEnter={() => onClick?.({ piece: "J", rotation })}
      >
        <Piece color={color} position={[x, y]} />
        <Piece color={color} position={[x + 1, y]} />
        <Piece color={color} position={[x + 2, y]} />
        <Piece color={color} position={[x, y + 1]} />
      </BasePiece>
    );
  }
  if (rotation === 90) {
    /*
        ..
        .
        .
    */
    return (
      <BasePiece
        hoverable={hoverable}
        active={active}
        onClick={() => onClick?.({ piece: "J", rotation })}
        onMouseEnter={() => onClick?.({ piece: "J", rotation })}
      >
        <Piece color={color} position={[x, y]} />
        <Piece color={color} position={[x, y + 1]} />
        <Piece color={color} position={[x, y + 2]} />
        <Piece color={color} position={[x + 1, y + 2]} />
      </BasePiece>
    );
  }
  if (rotation === 135) {
    /*
        ...
          .
    */
    return (
      <BasePiece
        hoverable={hoverable}
        active={active}
        onClick={() => onClick?.({ piece: "J", rotation })}
        onMouseEnter={() => onClick?.({ piece: "J", rotation })}
      >
        <Piece color={color} position={[x, y]} />
        <Piece color={color} position={[x, y + 1]} />
        <Piece color={color} position={[x - 1, y + 1]} />
        <Piece color={color} position={[x - 2, y + 1]} />
      </BasePiece>
    );
  }
  return (
    /*
         .
         .
        ..
    */
    <BasePiece
      hoverable={hoverable}
      active={active}
      onClick={() => onClick?.({ piece: "J", rotation })}
      onMouseEnter={() => onClick?.({ piece: "J", rotation })}
    >
      <Piece color={color} position={[x, y]} />
      <Piece color={color} position={[x + 1, y]} />
      <Piece color={color} position={[x + 1, y + 1]} />
      <Piece color={color} position={[x + 1, y + 2]} />
    </BasePiece>
  );
}

const BasePiece: FC<
  HTMLProps<HTMLDivElement> & {
    hoverable?: boolean;
    active?: boolean;
  }
> = function BasePiece({ children, hoverable, active, ...rest }) {
  return (
    <div
      {...rest}
      className={`${
        hoverable === false
          ? ""
          : `${active ? "" : "opacity-50 hover:opacity-100"} cursor-pointer`
      }`}
    >
      {children}
    </div>
  );
};

type PieceProps = {
  position: Position;
  rotation?: Rotation;
  hoverable?: boolean;
  active?: boolean;
  onClick?: ({ rotation: Rotation, piece: PieceType }) => void;
};
type Color = "blue" | "green" | "red" | "yellow" | "purple" | "orange" | "teal";
type Position = [number, number];
type Rotation = 0 | 45 | 90 | 135;

function Piece({
  position,
  borderRight,
  borderLeft,
  borderBottom,
  borderTop,
  color,
}: {
  position: Position;
  borderRight?: boolean;
  borderLeft?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  color: Color;
}) {
  const [x, y] = position;
  return (
    <div
      className={`border-2 border-black ${
        // bg-${color}-400 was cleaner but is not [purgeable](https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html)
        color === "blue"
          ? "bg-blue-400"
          : color === "green"
          ? "bg-green-400"
          : color === "red"
          ? "bg-red-400"
          : color === "yellow"
          ? "bg-yellow-400"
          : color === "purple"
          ? "bg-purple-400"
          : color === "orange"
          ? "bg-orange-400"
          : color === "teal"
          ? "bg-teal-400"
          : ""
      } absolute`}
      style={{
        borderLeftWidth: borderLeft === false ? "1px" : undefined,
        borderRightWidth: borderRight === false ? "1px" : undefined,
        borderBottomWidth: borderBottom === false ? "1px" : undefined,
        borderTopWidth: borderTop === false ? "1px" : undefined,
        width: PIECE_SIZE,
        height: PIECE_SIZE,
        left: x * PIECE_SIZE,
        bottom: y * PIECE_SIZE,
      }}
    />
  );
}
