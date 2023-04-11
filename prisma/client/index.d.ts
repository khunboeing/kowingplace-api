
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model UserExternal
 * 
 */
export type UserExternal = {
  id: number
  name: string
  email: string
  tel: string
  password: string | null
  createAt: Date
  updateAt: Date
}

/**
 * Model CoWork
 * 
 */
export type CoWork = {
  id: number
  name: string
  description: string
  location: string
  tel: string
  picture: string
  userInternalId: number | null
}

/**
 * Model UserInternal
 * 
 */
export type UserInternal = {
  id: number
  name: string
  email: string
  tel: string
  password: string
  createAt: Date
  updateAt: Date
}

/**
 * Model Room
 * 
 */
export type Room = {
  id: number
  name: string
  capacity: number
  createAt: Date
  updateAt: Date
}

/**
 * Model RoomRate
 * 
 */
export type RoomRate = {
  id: number
  price: number | null
  createAt: Date
  updateAt: Date
  durationCategoryId: number
  roomId: number | null
  active: boolean | null
}

/**
 * Model durationCategory
 * 
 */
export type durationCategory = {
  id: number
  duration: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Facility
 * 
 */
export type Facility = {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}

/**
 * Model FacilityToCoWork
 * 
 */
export type FacilityToCoWork = {
  id: number
  coWorkId: number
  facilityId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model BranchToRoom
 * 
 */
export type BranchToRoom = {
  id: number
  coWorkId: number
  roomId: number
  createAt: Date
  updateAt: Date
  active: boolean | null
}

/**
 * Model BookRoom
 * 
 */
export type BookRoom = {
  id: number
  startTime: Date
  roomId: number | null
  roomRateId: number
  status: string
  createAt: Date
  updateAt: Date
  userExternalId: number
  vertifyBookingCodeId: number
  price: number | null
}

/**
 * Model VertifyBookingCode
 * 
 */
export type VertifyBookingCode = {
  id: number
  verifyCode: string
  bookdate: Date
  createAt: Date
  updateAt: Date
}

/**
 * Model Open
 * 
 */
export type Open = {
  id: number
  monOpen: number
  tueOpen: number
  wedOpen: number
  thursOpen: number
  friOpen: number
  satOpen: number
  sunOpen: number
  coWorkId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Close
 * 
 */
export type Close = {
  id: number
  monClose: number
  tueClose: number
  wedClose: number
  thursClose: number
  friClose: number
  satClose: number
  sunClose: number
  coWorkId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model OpenClose24Hours
 * 
 */
export type OpenClose24Hours = {
  id: number
  mon24hours: boolean
  tue24hours: boolean
  wed24hours: boolean
  thurs24hours: boolean
  fri24hours: boolean
  sat24hours: boolean
  sun24hours: boolean
  coWorkId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model OpenCloseBoolean
 * 
 */
export type OpenCloseBoolean = {
  id: number
  monOnOff: boolean
  tueOnOff: boolean
  wedOnOff: boolean
  thursOnOff: boolean
  friOnOff: boolean
  satOnOff: boolean
  sunOnOff: boolean
  coWorkId: number
  createAt: Date
  updateAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserExternals
 * const userExternals = await prisma.userExternal.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserExternals
   * const userExternals = await prisma.userExternal.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.userExternal`: Exposes CRUD operations for the **UserExternal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExternals
    * const userExternals = await prisma.userExternal.findMany()
    * ```
    */
  get userExternal(): Prisma.UserExternalDelegate<GlobalReject>;

  /**
   * `prisma.coWork`: Exposes CRUD operations for the **CoWork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoWorks
    * const coWorks = await prisma.coWork.findMany()
    * ```
    */
  get coWork(): Prisma.CoWorkDelegate<GlobalReject>;

  /**
   * `prisma.userInternal`: Exposes CRUD operations for the **UserInternal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInternals
    * const userInternals = await prisma.userInternal.findMany()
    * ```
    */
  get userInternal(): Prisma.UserInternalDelegate<GlobalReject>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<GlobalReject>;

  /**
   * `prisma.roomRate`: Exposes CRUD operations for the **RoomRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomRates
    * const roomRates = await prisma.roomRate.findMany()
    * ```
    */
  get roomRate(): Prisma.RoomRateDelegate<GlobalReject>;

  /**
   * `prisma.durationCategory`: Exposes CRUD operations for the **durationCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DurationCategories
    * const durationCategories = await prisma.durationCategory.findMany()
    * ```
    */
  get durationCategory(): Prisma.durationCategoryDelegate<GlobalReject>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<GlobalReject>;

  /**
   * `prisma.facilityToCoWork`: Exposes CRUD operations for the **FacilityToCoWork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilityToCoWorks
    * const facilityToCoWorks = await prisma.facilityToCoWork.findMany()
    * ```
    */
  get facilityToCoWork(): Prisma.FacilityToCoWorkDelegate<GlobalReject>;

  /**
   * `prisma.branchToRoom`: Exposes CRUD operations for the **BranchToRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BranchToRooms
    * const branchToRooms = await prisma.branchToRoom.findMany()
    * ```
    */
  get branchToRoom(): Prisma.BranchToRoomDelegate<GlobalReject>;

  /**
   * `prisma.bookRoom`: Exposes CRUD operations for the **BookRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookRooms
    * const bookRooms = await prisma.bookRoom.findMany()
    * ```
    */
  get bookRoom(): Prisma.BookRoomDelegate<GlobalReject>;

  /**
   * `prisma.vertifyBookingCode`: Exposes CRUD operations for the **VertifyBookingCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VertifyBookingCodes
    * const vertifyBookingCodes = await prisma.vertifyBookingCode.findMany()
    * ```
    */
  get vertifyBookingCode(): Prisma.VertifyBookingCodeDelegate<GlobalReject>;

  /**
   * `prisma.open`: Exposes CRUD operations for the **Open** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opens
    * const opens = await prisma.open.findMany()
    * ```
    */
  get open(): Prisma.OpenDelegate<GlobalReject>;

  /**
   * `prisma.close`: Exposes CRUD operations for the **Close** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Closes
    * const closes = await prisma.close.findMany()
    * ```
    */
  get close(): Prisma.CloseDelegate<GlobalReject>;

  /**
   * `prisma.openClose24Hours`: Exposes CRUD operations for the **OpenClose24Hours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpenClose24Hours
    * const openClose24Hours = await prisma.openClose24Hours.findMany()
    * ```
    */
  get openClose24Hours(): Prisma.OpenClose24HoursDelegate<GlobalReject>;

  /**
   * `prisma.openCloseBoolean`: Exposes CRUD operations for the **OpenCloseBoolean** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpenCloseBooleans
    * const openCloseBooleans = await prisma.openCloseBoolean.findMany()
    * ```
    */
  get openCloseBoolean(): Prisma.OpenCloseBooleanDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserExternal: 'UserExternal',
    CoWork: 'CoWork',
    UserInternal: 'UserInternal',
    Room: 'Room',
    RoomRate: 'RoomRate',
    durationCategory: 'durationCategory',
    Facility: 'Facility',
    FacilityToCoWork: 'FacilityToCoWork',
    BranchToRoom: 'BranchToRoom',
    BookRoom: 'BookRoom',
    VertifyBookingCode: 'VertifyBookingCode',
    Open: 'Open',
    Close: 'Close',
    OpenClose24Hours: 'OpenClose24Hours',
    OpenCloseBoolean: 'OpenCloseBoolean'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserExternalCountOutputType
   */


  export type UserExternalCountOutputType = {
    BookRoom: number
  }

  export type UserExternalCountOutputTypeSelect = {
    BookRoom?: boolean
  }

  export type UserExternalCountOutputTypeGetPayload<S extends boolean | null | undefined | UserExternalCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserExternalCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserExternalCountOutputTypeArgs)
    ? UserExternalCountOutputType 
    : S extends { select: any } & (UserExternalCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserExternalCountOutputType ? UserExternalCountOutputType[P] : never
  } 
      : UserExternalCountOutputType




  // Custom InputTypes

  /**
   * UserExternalCountOutputType without action
   */
  export type UserExternalCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserExternalCountOutputType
     */
    select?: UserExternalCountOutputTypeSelect | null
  }



  /**
   * Count Type CoWorkCountOutputType
   */


  export type CoWorkCountOutputType = {
    BranchToRoom: number
    FacilityToCoWork: number
  }

  export type CoWorkCountOutputTypeSelect = {
    BranchToRoom?: boolean
    FacilityToCoWork?: boolean
  }

  export type CoWorkCountOutputTypeGetPayload<S extends boolean | null | undefined | CoWorkCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CoWorkCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CoWorkCountOutputTypeArgs)
    ? CoWorkCountOutputType 
    : S extends { select: any } & (CoWorkCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CoWorkCountOutputType ? CoWorkCountOutputType[P] : never
  } 
      : CoWorkCountOutputType




  // Custom InputTypes

  /**
   * CoWorkCountOutputType without action
   */
  export type CoWorkCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CoWorkCountOutputType
     */
    select?: CoWorkCountOutputTypeSelect | null
  }



  /**
   * Count Type RoomCountOutputType
   */


  export type RoomCountOutputType = {
    RoomRate: number
    BookRoom: number
  }

  export type RoomCountOutputTypeSelect = {
    RoomRate?: boolean
    BookRoom?: boolean
  }

  export type RoomCountOutputTypeGetPayload<S extends boolean | null | undefined | RoomCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoomCountOutputTypeArgs)
    ? RoomCountOutputType 
    : S extends { select: any } & (RoomCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoomCountOutputType ? RoomCountOutputType[P] : never
  } 
      : RoomCountOutputType




  // Custom InputTypes

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect | null
  }



  /**
   * Count Type RoomRateCountOutputType
   */


  export type RoomRateCountOutputType = {
    BookRoom: number
  }

  export type RoomRateCountOutputTypeSelect = {
    BookRoom?: boolean
  }

  export type RoomRateCountOutputTypeGetPayload<S extends boolean | null | undefined | RoomRateCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomRateCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoomRateCountOutputTypeArgs)
    ? RoomRateCountOutputType 
    : S extends { select: any } & (RoomRateCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoomRateCountOutputType ? RoomRateCountOutputType[P] : never
  } 
      : RoomRateCountOutputType




  // Custom InputTypes

  /**
   * RoomRateCountOutputType without action
   */
  export type RoomRateCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoomRateCountOutputType
     */
    select?: RoomRateCountOutputTypeSelect | null
  }



  /**
   * Count Type DurationCategoryCountOutputType
   */


  export type DurationCategoryCountOutputType = {
    RoomRate: number
  }

  export type DurationCategoryCountOutputTypeSelect = {
    RoomRate?: boolean
  }

  export type DurationCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | DurationCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DurationCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DurationCategoryCountOutputTypeArgs)
    ? DurationCategoryCountOutputType 
    : S extends { select: any } & (DurationCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DurationCategoryCountOutputType ? DurationCategoryCountOutputType[P] : never
  } 
      : DurationCategoryCountOutputType




  // Custom InputTypes

  /**
   * DurationCategoryCountOutputType without action
   */
  export type DurationCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DurationCategoryCountOutputType
     */
    select?: DurationCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type FacilityCountOutputType
   */


  export type FacilityCountOutputType = {
    FacilityToCoWork: number
  }

  export type FacilityCountOutputTypeSelect = {
    FacilityToCoWork?: boolean
  }

  export type FacilityCountOutputTypeGetPayload<S extends boolean | null | undefined | FacilityCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FacilityCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FacilityCountOutputTypeArgs)
    ? FacilityCountOutputType 
    : S extends { select: any } & (FacilityCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FacilityCountOutputType ? FacilityCountOutputType[P] : never
  } 
      : FacilityCountOutputType




  // Custom InputTypes

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect | null
  }



  /**
   * Count Type VertifyBookingCodeCountOutputType
   */


  export type VertifyBookingCodeCountOutputType = {
    bookRoom: number
  }

  export type VertifyBookingCodeCountOutputTypeSelect = {
    bookRoom?: boolean
  }

  export type VertifyBookingCodeCountOutputTypeGetPayload<S extends boolean | null | undefined | VertifyBookingCodeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VertifyBookingCodeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VertifyBookingCodeCountOutputTypeArgs)
    ? VertifyBookingCodeCountOutputType 
    : S extends { select: any } & (VertifyBookingCodeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VertifyBookingCodeCountOutputType ? VertifyBookingCodeCountOutputType[P] : never
  } 
      : VertifyBookingCodeCountOutputType




  // Custom InputTypes

  /**
   * VertifyBookingCodeCountOutputType without action
   */
  export type VertifyBookingCodeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCodeCountOutputType
     */
    select?: VertifyBookingCodeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model UserExternal
   */


  export type AggregateUserExternal = {
    _count: UserExternalCountAggregateOutputType | null
    _avg: UserExternalAvgAggregateOutputType | null
    _sum: UserExternalSumAggregateOutputType | null
    _min: UserExternalMinAggregateOutputType | null
    _max: UserExternalMaxAggregateOutputType | null
  }

  export type UserExternalAvgAggregateOutputType = {
    id: number | null
  }

  export type UserExternalSumAggregateOutputType = {
    id: number | null
  }

  export type UserExternalMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tel: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserExternalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tel: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserExternalCountAggregateOutputType = {
    id: number
    name: number
    email: number
    tel: number
    password: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserExternalAvgAggregateInputType = {
    id?: true
  }

  export type UserExternalSumAggregateInputType = {
    id?: true
  }

  export type UserExternalMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserExternalMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserExternalCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserExternalAggregateArgs = {
    /**
     * Filter which UserExternal to aggregate.
     */
    where?: UserExternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExternals to fetch.
     */
    orderBy?: Enumerable<UserExternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExternals
    **/
    _count?: true | UserExternalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserExternalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserExternalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExternalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExternalMaxAggregateInputType
  }

  export type GetUserExternalAggregateType<T extends UserExternalAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExternal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExternal[P]>
      : GetScalarType<T[P], AggregateUserExternal[P]>
  }




  export type UserExternalGroupByArgs = {
    where?: UserExternalWhereInput
    orderBy?: Enumerable<UserExternalOrderByWithAggregationInput>
    by: UserExternalScalarFieldEnum[]
    having?: UserExternalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExternalCountAggregateInputType | true
    _avg?: UserExternalAvgAggregateInputType
    _sum?: UserExternalSumAggregateInputType
    _min?: UserExternalMinAggregateInputType
    _max?: UserExternalMaxAggregateInputType
  }


  export type UserExternalGroupByOutputType = {
    id: number
    name: string
    email: string
    tel: string
    password: string | null
    createAt: Date
    updateAt: Date
    _count: UserExternalCountAggregateOutputType | null
    _avg: UserExternalAvgAggregateOutputType | null
    _sum: UserExternalSumAggregateOutputType | null
    _min: UserExternalMinAggregateOutputType | null
    _max: UserExternalMaxAggregateOutputType | null
  }

  type GetUserExternalGroupByPayload<T extends UserExternalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserExternalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExternalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExternalGroupByOutputType[P]>
            : GetScalarType<T[P], UserExternalGroupByOutputType[P]>
        }
      >
    >


  export type UserExternalSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    BookRoom?: boolean | UserExternal$BookRoomArgs
    _count?: boolean | UserExternalCountOutputTypeArgs
  }


  export type UserExternalInclude = {
    BookRoom?: boolean | UserExternal$BookRoomArgs
    _count?: boolean | UserExternalCountOutputTypeArgs
  }

  export type UserExternalGetPayload<S extends boolean | null | undefined | UserExternalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserExternal :
    S extends undefined ? never :
    S extends { include: any } & (UserExternalArgs | UserExternalFindManyArgs)
    ? UserExternal  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserExternalCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserExternalArgs | UserExternalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserExternalCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserExternal ? UserExternal[P] : never
  } 
      : UserExternal


  type UserExternalCountArgs = 
    Omit<UserExternalFindManyArgs, 'select' | 'include'> & {
      select?: UserExternalCountAggregateInputType | true
    }

  export interface UserExternalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserExternal that matches the filter.
     * @param {UserExternalFindUniqueArgs} args - Arguments to find a UserExternal
     * @example
     * // Get one UserExternal
     * const userExternal = await prisma.userExternal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserExternalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserExternalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserExternal'> extends True ? Prisma__UserExternalClient<UserExternalGetPayload<T>> : Prisma__UserExternalClient<UserExternalGetPayload<T> | null, null>

    /**
     * Find one UserExternal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserExternalFindUniqueOrThrowArgs} args - Arguments to find a UserExternal
     * @example
     * // Get one UserExternal
     * const userExternal = await prisma.userExternal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserExternalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserExternalFindUniqueOrThrowArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Find the first UserExternal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalFindFirstArgs} args - Arguments to find a UserExternal
     * @example
     * // Get one UserExternal
     * const userExternal = await prisma.userExternal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserExternalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserExternalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserExternal'> extends True ? Prisma__UserExternalClient<UserExternalGetPayload<T>> : Prisma__UserExternalClient<UserExternalGetPayload<T> | null, null>

    /**
     * Find the first UserExternal that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalFindFirstOrThrowArgs} args - Arguments to find a UserExternal
     * @example
     * // Get one UserExternal
     * const userExternal = await prisma.userExternal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserExternalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserExternalFindFirstOrThrowArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Find zero or more UserExternals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExternals
     * const userExternals = await prisma.userExternal.findMany()
     * 
     * // Get first 10 UserExternals
     * const userExternals = await prisma.userExternal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExternalWithIdOnly = await prisma.userExternal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserExternalFindManyArgs>(
      args?: SelectSubset<T, UserExternalFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserExternalGetPayload<T>>>

    /**
     * Create a UserExternal.
     * @param {UserExternalCreateArgs} args - Arguments to create a UserExternal.
     * @example
     * // Create one UserExternal
     * const UserExternal = await prisma.userExternal.create({
     *   data: {
     *     // ... data to create a UserExternal
     *   }
     * })
     * 
    **/
    create<T extends UserExternalCreateArgs>(
      args: SelectSubset<T, UserExternalCreateArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Create many UserExternals.
     *     @param {UserExternalCreateManyArgs} args - Arguments to create many UserExternals.
     *     @example
     *     // Create many UserExternals
     *     const userExternal = await prisma.userExternal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserExternalCreateManyArgs>(
      args?: SelectSubset<T, UserExternalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserExternal.
     * @param {UserExternalDeleteArgs} args - Arguments to delete one UserExternal.
     * @example
     * // Delete one UserExternal
     * const UserExternal = await prisma.userExternal.delete({
     *   where: {
     *     // ... filter to delete one UserExternal
     *   }
     * })
     * 
    **/
    delete<T extends UserExternalDeleteArgs>(
      args: SelectSubset<T, UserExternalDeleteArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Update one UserExternal.
     * @param {UserExternalUpdateArgs} args - Arguments to update one UserExternal.
     * @example
     * // Update one UserExternal
     * const userExternal = await prisma.userExternal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserExternalUpdateArgs>(
      args: SelectSubset<T, UserExternalUpdateArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Delete zero or more UserExternals.
     * @param {UserExternalDeleteManyArgs} args - Arguments to filter UserExternals to delete.
     * @example
     * // Delete a few UserExternals
     * const { count } = await prisma.userExternal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserExternalDeleteManyArgs>(
      args?: SelectSubset<T, UserExternalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExternals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExternals
     * const userExternal = await prisma.userExternal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserExternalUpdateManyArgs>(
      args: SelectSubset<T, UserExternalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExternal.
     * @param {UserExternalUpsertArgs} args - Arguments to update or create a UserExternal.
     * @example
     * // Update or create a UserExternal
     * const userExternal = await prisma.userExternal.upsert({
     *   create: {
     *     // ... data to create a UserExternal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExternal we want to update
     *   }
     * })
    **/
    upsert<T extends UserExternalUpsertArgs>(
      args: SelectSubset<T, UserExternalUpsertArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Count the number of UserExternals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalCountArgs} args - Arguments to filter UserExternals to count.
     * @example
     * // Count the number of UserExternals
     * const count = await prisma.userExternal.count({
     *   where: {
     *     // ... the filter for the UserExternals we want to count
     *   }
     * })
    **/
    count<T extends UserExternalCountArgs>(
      args?: Subset<T, UserExternalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExternalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExternal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExternalAggregateArgs>(args: Subset<T, UserExternalAggregateArgs>): Prisma.PrismaPromise<GetUserExternalAggregateType<T>>

    /**
     * Group by UserExternal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExternalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExternalGroupByArgs['orderBy'] }
        : { orderBy?: UserExternalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExternalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExternalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExternal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserExternalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    BookRoom<T extends UserExternal$BookRoomArgs= {}>(args?: Subset<T, UserExternal$BookRoomArgs>): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserExternal base type for findUnique actions
   */
  export type UserExternalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternal to fetch.
     */
    where: UserExternalWhereUniqueInput
  }

  /**
   * UserExternal findUnique
   */
  export interface UserExternalFindUniqueArgs extends UserExternalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserExternal findUniqueOrThrow
   */
  export type UserExternalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternal to fetch.
     */
    where: UserExternalWhereUniqueInput
  }


  /**
   * UserExternal base type for findFirst actions
   */
  export type UserExternalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternal to fetch.
     */
    where?: UserExternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExternals to fetch.
     */
    orderBy?: Enumerable<UserExternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExternals.
     */
    cursor?: UserExternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExternals.
     */
    distinct?: Enumerable<UserExternalScalarFieldEnum>
  }

  /**
   * UserExternal findFirst
   */
  export interface UserExternalFindFirstArgs extends UserExternalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserExternal findFirstOrThrow
   */
  export type UserExternalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternal to fetch.
     */
    where?: UserExternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExternals to fetch.
     */
    orderBy?: Enumerable<UserExternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExternals.
     */
    cursor?: UserExternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExternals.
     */
    distinct?: Enumerable<UserExternalScalarFieldEnum>
  }


  /**
   * UserExternal findMany
   */
  export type UserExternalFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternals to fetch.
     */
    where?: UserExternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExternals to fetch.
     */
    orderBy?: Enumerable<UserExternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExternals.
     */
    cursor?: UserExternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExternals.
     */
    skip?: number
    distinct?: Enumerable<UserExternalScalarFieldEnum>
  }


  /**
   * UserExternal create
   */
  export type UserExternalCreateArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * The data needed to create a UserExternal.
     */
    data: XOR<UserExternalCreateInput, UserExternalUncheckedCreateInput>
  }


  /**
   * UserExternal createMany
   */
  export type UserExternalCreateManyArgs = {
    /**
     * The data used to create many UserExternals.
     */
    data: Enumerable<UserExternalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserExternal update
   */
  export type UserExternalUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * The data needed to update a UserExternal.
     */
    data: XOR<UserExternalUpdateInput, UserExternalUncheckedUpdateInput>
    /**
     * Choose, which UserExternal to update.
     */
    where: UserExternalWhereUniqueInput
  }


  /**
   * UserExternal updateMany
   */
  export type UserExternalUpdateManyArgs = {
    /**
     * The data used to update UserExternals.
     */
    data: XOR<UserExternalUpdateManyMutationInput, UserExternalUncheckedUpdateManyInput>
    /**
     * Filter which UserExternals to update
     */
    where?: UserExternalWhereInput
  }


  /**
   * UserExternal upsert
   */
  export type UserExternalUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * The filter to search for the UserExternal to update in case it exists.
     */
    where: UserExternalWhereUniqueInput
    /**
     * In case the UserExternal found by the `where` argument doesn't exist, create a new UserExternal with this data.
     */
    create: XOR<UserExternalCreateInput, UserExternalUncheckedCreateInput>
    /**
     * In case the UserExternal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExternalUpdateInput, UserExternalUncheckedUpdateInput>
  }


  /**
   * UserExternal delete
   */
  export type UserExternalDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter which UserExternal to delete.
     */
    where: UserExternalWhereUniqueInput
  }


  /**
   * UserExternal deleteMany
   */
  export type UserExternalDeleteManyArgs = {
    /**
     * Filter which UserExternals to delete
     */
    where?: UserExternalWhereInput
  }


  /**
   * UserExternal.BookRoom
   */
  export type UserExternal$BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    cursor?: BookRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * UserExternal without action
   */
  export type UserExternalArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
  }



  /**
   * Model CoWork
   */


  export type AggregateCoWork = {
    _count: CoWorkCountAggregateOutputType | null
    _avg: CoWorkAvgAggregateOutputType | null
    _sum: CoWorkSumAggregateOutputType | null
    _min: CoWorkMinAggregateOutputType | null
    _max: CoWorkMaxAggregateOutputType | null
  }

  export type CoWorkAvgAggregateOutputType = {
    id: number | null
    userInternalId: number | null
  }

  export type CoWorkSumAggregateOutputType = {
    id: number | null
    userInternalId: number | null
  }

  export type CoWorkMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    location: string | null
    tel: string | null
    picture: string | null
    userInternalId: number | null
  }

  export type CoWorkMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    location: string | null
    tel: string | null
    picture: string | null
    userInternalId: number | null
  }

  export type CoWorkCountAggregateOutputType = {
    id: number
    name: number
    description: number
    location: number
    tel: number
    picture: number
    userInternalId: number
    _all: number
  }


  export type CoWorkAvgAggregateInputType = {
    id?: true
    userInternalId?: true
  }

  export type CoWorkSumAggregateInputType = {
    id?: true
    userInternalId?: true
  }

  export type CoWorkMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    tel?: true
    picture?: true
    userInternalId?: true
  }

  export type CoWorkMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    tel?: true
    picture?: true
    userInternalId?: true
  }

  export type CoWorkCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    tel?: true
    picture?: true
    userInternalId?: true
    _all?: true
  }

  export type CoWorkAggregateArgs = {
    /**
     * Filter which CoWork to aggregate.
     */
    where?: CoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoWorks to fetch.
     */
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoWorks
    **/
    _count?: true | CoWorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoWorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoWorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoWorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoWorkMaxAggregateInputType
  }

  export type GetCoWorkAggregateType<T extends CoWorkAggregateArgs> = {
        [P in keyof T & keyof AggregateCoWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoWork[P]>
      : GetScalarType<T[P], AggregateCoWork[P]>
  }




  export type CoWorkGroupByArgs = {
    where?: CoWorkWhereInput
    orderBy?: Enumerable<CoWorkOrderByWithAggregationInput>
    by: CoWorkScalarFieldEnum[]
    having?: CoWorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoWorkCountAggregateInputType | true
    _avg?: CoWorkAvgAggregateInputType
    _sum?: CoWorkSumAggregateInputType
    _min?: CoWorkMinAggregateInputType
    _max?: CoWorkMaxAggregateInputType
  }


  export type CoWorkGroupByOutputType = {
    id: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId: number | null
    _count: CoWorkCountAggregateOutputType | null
    _avg: CoWorkAvgAggregateOutputType | null
    _sum: CoWorkSumAggregateOutputType | null
    _min: CoWorkMinAggregateOutputType | null
    _max: CoWorkMaxAggregateOutputType | null
  }

  type GetCoWorkGroupByPayload<T extends CoWorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CoWorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoWorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoWorkGroupByOutputType[P]>
            : GetScalarType<T[P], CoWorkGroupByOutputType[P]>
        }
      >
    >


  export type CoWorkSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    tel?: boolean
    picture?: boolean
    userInternalId?: boolean
    BranchToRoom?: boolean | CoWork$BranchToRoomArgs
    FacilityToCoWork?: boolean | CoWork$FacilityToCoWorkArgs
    userInternal?: boolean | UserInternalArgs
    Close?: boolean | CloseArgs
    Open?: boolean | OpenArgs
    OpenClose24Hours?: boolean | OpenClose24HoursArgs
    OpenCloseBoolean?: boolean | OpenCloseBooleanArgs
    _count?: boolean | CoWorkCountOutputTypeArgs
  }


  export type CoWorkInclude = {
    BranchToRoom?: boolean | CoWork$BranchToRoomArgs
    FacilityToCoWork?: boolean | CoWork$FacilityToCoWorkArgs
    userInternal?: boolean | UserInternalArgs
    Close?: boolean | CloseArgs
    Open?: boolean | OpenArgs
    OpenClose24Hours?: boolean | OpenClose24HoursArgs
    OpenCloseBoolean?: boolean | OpenCloseBooleanArgs
    _count?: boolean | CoWorkCountOutputTypeArgs
  }

  export type CoWorkGetPayload<S extends boolean | null | undefined | CoWorkArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CoWork :
    S extends undefined ? never :
    S extends { include: any } & (CoWorkArgs | CoWorkFindManyArgs)
    ? CoWork  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BranchToRoom' ? Array < BranchToRoomGetPayload<S['include'][P]>>  :
        P extends 'FacilityToCoWork' ? Array < FacilityToCoWorkGetPayload<S['include'][P]>>  :
        P extends 'userInternal' ? UserInternalGetPayload<S['include'][P]> | null :
        P extends 'Close' ? CloseGetPayload<S['include'][P]> | null :
        P extends 'Open' ? OpenGetPayload<S['include'][P]> | null :
        P extends 'OpenClose24Hours' ? OpenClose24HoursGetPayload<S['include'][P]> | null :
        P extends 'OpenCloseBoolean' ? OpenCloseBooleanGetPayload<S['include'][P]> | null :
        P extends '_count' ? CoWorkCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CoWorkArgs | CoWorkFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BranchToRoom' ? Array < BranchToRoomGetPayload<S['select'][P]>>  :
        P extends 'FacilityToCoWork' ? Array < FacilityToCoWorkGetPayload<S['select'][P]>>  :
        P extends 'userInternal' ? UserInternalGetPayload<S['select'][P]> | null :
        P extends 'Close' ? CloseGetPayload<S['select'][P]> | null :
        P extends 'Open' ? OpenGetPayload<S['select'][P]> | null :
        P extends 'OpenClose24Hours' ? OpenClose24HoursGetPayload<S['select'][P]> | null :
        P extends 'OpenCloseBoolean' ? OpenCloseBooleanGetPayload<S['select'][P]> | null :
        P extends '_count' ? CoWorkCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CoWork ? CoWork[P] : never
  } 
      : CoWork


  type CoWorkCountArgs = 
    Omit<CoWorkFindManyArgs, 'select' | 'include'> & {
      select?: CoWorkCountAggregateInputType | true
    }

  export interface CoWorkDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CoWork that matches the filter.
     * @param {CoWorkFindUniqueArgs} args - Arguments to find a CoWork
     * @example
     * // Get one CoWork
     * const coWork = await prisma.coWork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CoWorkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CoWorkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CoWork'> extends True ? Prisma__CoWorkClient<CoWorkGetPayload<T>> : Prisma__CoWorkClient<CoWorkGetPayload<T> | null, null>

    /**
     * Find one CoWork that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CoWorkFindUniqueOrThrowArgs} args - Arguments to find a CoWork
     * @example
     * // Get one CoWork
     * const coWork = await prisma.coWork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CoWorkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CoWorkFindUniqueOrThrowArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Find the first CoWork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkFindFirstArgs} args - Arguments to find a CoWork
     * @example
     * // Get one CoWork
     * const coWork = await prisma.coWork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CoWorkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CoWorkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CoWork'> extends True ? Prisma__CoWorkClient<CoWorkGetPayload<T>> : Prisma__CoWorkClient<CoWorkGetPayload<T> | null, null>

    /**
     * Find the first CoWork that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkFindFirstOrThrowArgs} args - Arguments to find a CoWork
     * @example
     * // Get one CoWork
     * const coWork = await prisma.coWork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CoWorkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CoWorkFindFirstOrThrowArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Find zero or more CoWorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoWorks
     * const coWorks = await prisma.coWork.findMany()
     * 
     * // Get first 10 CoWorks
     * const coWorks = await prisma.coWork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coWorkWithIdOnly = await prisma.coWork.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CoWorkFindManyArgs>(
      args?: SelectSubset<T, CoWorkFindManyArgs>
    ): Prisma.PrismaPromise<Array<CoWorkGetPayload<T>>>

    /**
     * Create a CoWork.
     * @param {CoWorkCreateArgs} args - Arguments to create a CoWork.
     * @example
     * // Create one CoWork
     * const CoWork = await prisma.coWork.create({
     *   data: {
     *     // ... data to create a CoWork
     *   }
     * })
     * 
    **/
    create<T extends CoWorkCreateArgs>(
      args: SelectSubset<T, CoWorkCreateArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Create many CoWorks.
     *     @param {CoWorkCreateManyArgs} args - Arguments to create many CoWorks.
     *     @example
     *     // Create many CoWorks
     *     const coWork = await prisma.coWork.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CoWorkCreateManyArgs>(
      args?: SelectSubset<T, CoWorkCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoWork.
     * @param {CoWorkDeleteArgs} args - Arguments to delete one CoWork.
     * @example
     * // Delete one CoWork
     * const CoWork = await prisma.coWork.delete({
     *   where: {
     *     // ... filter to delete one CoWork
     *   }
     * })
     * 
    **/
    delete<T extends CoWorkDeleteArgs>(
      args: SelectSubset<T, CoWorkDeleteArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Update one CoWork.
     * @param {CoWorkUpdateArgs} args - Arguments to update one CoWork.
     * @example
     * // Update one CoWork
     * const coWork = await prisma.coWork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CoWorkUpdateArgs>(
      args: SelectSubset<T, CoWorkUpdateArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Delete zero or more CoWorks.
     * @param {CoWorkDeleteManyArgs} args - Arguments to filter CoWorks to delete.
     * @example
     * // Delete a few CoWorks
     * const { count } = await prisma.coWork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CoWorkDeleteManyArgs>(
      args?: SelectSubset<T, CoWorkDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoWorks
     * const coWork = await prisma.coWork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CoWorkUpdateManyArgs>(
      args: SelectSubset<T, CoWorkUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoWork.
     * @param {CoWorkUpsertArgs} args - Arguments to update or create a CoWork.
     * @example
     * // Update or create a CoWork
     * const coWork = await prisma.coWork.upsert({
     *   create: {
     *     // ... data to create a CoWork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoWork we want to update
     *   }
     * })
    **/
    upsert<T extends CoWorkUpsertArgs>(
      args: SelectSubset<T, CoWorkUpsertArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Count the number of CoWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkCountArgs} args - Arguments to filter CoWorks to count.
     * @example
     * // Count the number of CoWorks
     * const count = await prisma.coWork.count({
     *   where: {
     *     // ... the filter for the CoWorks we want to count
     *   }
     * })
    **/
    count<T extends CoWorkCountArgs>(
      args?: Subset<T, CoWorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoWorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoWorkAggregateArgs>(args: Subset<T, CoWorkAggregateArgs>): Prisma.PrismaPromise<GetCoWorkAggregateType<T>>

    /**
     * Group by CoWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoWorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoWorkGroupByArgs['orderBy'] }
        : { orderBy?: CoWorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoWorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CoWork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CoWorkClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    BranchToRoom<T extends CoWork$BranchToRoomArgs= {}>(args?: Subset<T, CoWork$BranchToRoomArgs>): Prisma.PrismaPromise<Array<BranchToRoomGetPayload<T>>| Null>;

    FacilityToCoWork<T extends CoWork$FacilityToCoWorkArgs= {}>(args?: Subset<T, CoWork$FacilityToCoWorkArgs>): Prisma.PrismaPromise<Array<FacilityToCoWorkGetPayload<T>>| Null>;

    userInternal<T extends UserInternalArgs= {}>(args?: Subset<T, UserInternalArgs>): Prisma__UserInternalClient<UserInternalGetPayload<T> | Null>;

    Close<T extends CloseArgs= {}>(args?: Subset<T, CloseArgs>): Prisma__CloseClient<CloseGetPayload<T> | Null>;

    Open<T extends OpenArgs= {}>(args?: Subset<T, OpenArgs>): Prisma__OpenClient<OpenGetPayload<T> | Null>;

    OpenClose24Hours<T extends OpenClose24HoursArgs= {}>(args?: Subset<T, OpenClose24HoursArgs>): Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T> | Null>;

    OpenCloseBoolean<T extends OpenCloseBooleanArgs= {}>(args?: Subset<T, OpenCloseBooleanArgs>): Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CoWork base type for findUnique actions
   */
  export type CoWorkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWork to fetch.
     */
    where: CoWorkWhereUniqueInput
  }

  /**
   * CoWork findUnique
   */
  export interface CoWorkFindUniqueArgs extends CoWorkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CoWork findUniqueOrThrow
   */
  export type CoWorkFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWork to fetch.
     */
    where: CoWorkWhereUniqueInput
  }


  /**
   * CoWork base type for findFirst actions
   */
  export type CoWorkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWork to fetch.
     */
    where?: CoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoWorks to fetch.
     */
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoWorks.
     */
    cursor?: CoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoWorks.
     */
    distinct?: Enumerable<CoWorkScalarFieldEnum>
  }

  /**
   * CoWork findFirst
   */
  export interface CoWorkFindFirstArgs extends CoWorkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CoWork findFirstOrThrow
   */
  export type CoWorkFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWork to fetch.
     */
    where?: CoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoWorks to fetch.
     */
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoWorks.
     */
    cursor?: CoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoWorks.
     */
    distinct?: Enumerable<CoWorkScalarFieldEnum>
  }


  /**
   * CoWork findMany
   */
  export type CoWorkFindManyArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWorks to fetch.
     */
    where?: CoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoWorks to fetch.
     */
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoWorks.
     */
    cursor?: CoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoWorks.
     */
    skip?: number
    distinct?: Enumerable<CoWorkScalarFieldEnum>
  }


  /**
   * CoWork create
   */
  export type CoWorkCreateArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * The data needed to create a CoWork.
     */
    data: XOR<CoWorkCreateInput, CoWorkUncheckedCreateInput>
  }


  /**
   * CoWork createMany
   */
  export type CoWorkCreateManyArgs = {
    /**
     * The data used to create many CoWorks.
     */
    data: Enumerable<CoWorkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CoWork update
   */
  export type CoWorkUpdateArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * The data needed to update a CoWork.
     */
    data: XOR<CoWorkUpdateInput, CoWorkUncheckedUpdateInput>
    /**
     * Choose, which CoWork to update.
     */
    where: CoWorkWhereUniqueInput
  }


  /**
   * CoWork updateMany
   */
  export type CoWorkUpdateManyArgs = {
    /**
     * The data used to update CoWorks.
     */
    data: XOR<CoWorkUpdateManyMutationInput, CoWorkUncheckedUpdateManyInput>
    /**
     * Filter which CoWorks to update
     */
    where?: CoWorkWhereInput
  }


  /**
   * CoWork upsert
   */
  export type CoWorkUpsertArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * The filter to search for the CoWork to update in case it exists.
     */
    where: CoWorkWhereUniqueInput
    /**
     * In case the CoWork found by the `where` argument doesn't exist, create a new CoWork with this data.
     */
    create: XOR<CoWorkCreateInput, CoWorkUncheckedCreateInput>
    /**
     * In case the CoWork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoWorkUpdateInput, CoWorkUncheckedUpdateInput>
  }


  /**
   * CoWork delete
   */
  export type CoWorkDeleteArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter which CoWork to delete.
     */
    where: CoWorkWhereUniqueInput
  }


  /**
   * CoWork deleteMany
   */
  export type CoWorkDeleteManyArgs = {
    /**
     * Filter which CoWorks to delete
     */
    where?: CoWorkWhereInput
  }


  /**
   * CoWork.BranchToRoom
   */
  export type CoWork$BranchToRoomArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    where?: BranchToRoomWhereInput
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    cursor?: BranchToRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }


  /**
   * CoWork.FacilityToCoWork
   */
  export type CoWork$FacilityToCoWorkArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    where?: FacilityToCoWorkWhereInput
    orderBy?: Enumerable<FacilityToCoWorkOrderByWithRelationInput>
    cursor?: FacilityToCoWorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FacilityToCoWorkScalarFieldEnum>
  }


  /**
   * CoWork without action
   */
  export type CoWorkArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
  }



  /**
   * Model UserInternal
   */


  export type AggregateUserInternal = {
    _count: UserInternalCountAggregateOutputType | null
    _avg: UserInternalAvgAggregateOutputType | null
    _sum: UserInternalSumAggregateOutputType | null
    _min: UserInternalMinAggregateOutputType | null
    _max: UserInternalMaxAggregateOutputType | null
  }

  export type UserInternalAvgAggregateOutputType = {
    id: number | null
  }

  export type UserInternalSumAggregateOutputType = {
    id: number | null
  }

  export type UserInternalMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tel: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserInternalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tel: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserInternalCountAggregateOutputType = {
    id: number
    name: number
    email: number
    tel: number
    password: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserInternalAvgAggregateInputType = {
    id?: true
  }

  export type UserInternalSumAggregateInputType = {
    id?: true
  }

  export type UserInternalMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserInternalMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserInternalCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserInternalAggregateArgs = {
    /**
     * Filter which UserInternal to aggregate.
     */
    where?: UserInternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInternals to fetch.
     */
    orderBy?: Enumerable<UserInternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInternals
    **/
    _count?: true | UserInternalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInternalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInternalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInternalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInternalMaxAggregateInputType
  }

  export type GetUserInternalAggregateType<T extends UserInternalAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInternal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInternal[P]>
      : GetScalarType<T[P], AggregateUserInternal[P]>
  }




  export type UserInternalGroupByArgs = {
    where?: UserInternalWhereInput
    orderBy?: Enumerable<UserInternalOrderByWithAggregationInput>
    by: UserInternalScalarFieldEnum[]
    having?: UserInternalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInternalCountAggregateInputType | true
    _avg?: UserInternalAvgAggregateInputType
    _sum?: UserInternalSumAggregateInputType
    _min?: UserInternalMinAggregateInputType
    _max?: UserInternalMaxAggregateInputType
  }


  export type UserInternalGroupByOutputType = {
    id: number
    name: string
    email: string
    tel: string
    password: string
    createAt: Date
    updateAt: Date
    _count: UserInternalCountAggregateOutputType | null
    _avg: UserInternalAvgAggregateOutputType | null
    _sum: UserInternalSumAggregateOutputType | null
    _min: UserInternalMinAggregateOutputType | null
    _max: UserInternalMaxAggregateOutputType | null
  }

  type GetUserInternalGroupByPayload<T extends UserInternalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserInternalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInternalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInternalGroupByOutputType[P]>
            : GetScalarType<T[P], UserInternalGroupByOutputType[P]>
        }
      >
    >


  export type UserInternalSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    coWork?: boolean | CoWorkArgs
  }


  export type UserInternalInclude = {
    coWork?: boolean | CoWorkArgs
  }

  export type UserInternalGetPayload<S extends boolean | null | undefined | UserInternalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserInternal :
    S extends undefined ? never :
    S extends { include: any } & (UserInternalArgs | UserInternalFindManyArgs)
    ? UserInternal  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UserInternalArgs | UserInternalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['select'][P]> | null :  P extends keyof UserInternal ? UserInternal[P] : never
  } 
      : UserInternal


  type UserInternalCountArgs = 
    Omit<UserInternalFindManyArgs, 'select' | 'include'> & {
      select?: UserInternalCountAggregateInputType | true
    }

  export interface UserInternalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserInternal that matches the filter.
     * @param {UserInternalFindUniqueArgs} args - Arguments to find a UserInternal
     * @example
     * // Get one UserInternal
     * const userInternal = await prisma.userInternal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserInternalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserInternalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserInternal'> extends True ? Prisma__UserInternalClient<UserInternalGetPayload<T>> : Prisma__UserInternalClient<UserInternalGetPayload<T> | null, null>

    /**
     * Find one UserInternal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserInternalFindUniqueOrThrowArgs} args - Arguments to find a UserInternal
     * @example
     * // Get one UserInternal
     * const userInternal = await prisma.userInternal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserInternalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserInternalFindUniqueOrThrowArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Find the first UserInternal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalFindFirstArgs} args - Arguments to find a UserInternal
     * @example
     * // Get one UserInternal
     * const userInternal = await prisma.userInternal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserInternalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserInternalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserInternal'> extends True ? Prisma__UserInternalClient<UserInternalGetPayload<T>> : Prisma__UserInternalClient<UserInternalGetPayload<T> | null, null>

    /**
     * Find the first UserInternal that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalFindFirstOrThrowArgs} args - Arguments to find a UserInternal
     * @example
     * // Get one UserInternal
     * const userInternal = await prisma.userInternal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserInternalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserInternalFindFirstOrThrowArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Find zero or more UserInternals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInternals
     * const userInternals = await prisma.userInternal.findMany()
     * 
     * // Get first 10 UserInternals
     * const userInternals = await prisma.userInternal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInternalWithIdOnly = await prisma.userInternal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserInternalFindManyArgs>(
      args?: SelectSubset<T, UserInternalFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserInternalGetPayload<T>>>

    /**
     * Create a UserInternal.
     * @param {UserInternalCreateArgs} args - Arguments to create a UserInternal.
     * @example
     * // Create one UserInternal
     * const UserInternal = await prisma.userInternal.create({
     *   data: {
     *     // ... data to create a UserInternal
     *   }
     * })
     * 
    **/
    create<T extends UserInternalCreateArgs>(
      args: SelectSubset<T, UserInternalCreateArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Create many UserInternals.
     *     @param {UserInternalCreateManyArgs} args - Arguments to create many UserInternals.
     *     @example
     *     // Create many UserInternals
     *     const userInternal = await prisma.userInternal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserInternalCreateManyArgs>(
      args?: SelectSubset<T, UserInternalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInternal.
     * @param {UserInternalDeleteArgs} args - Arguments to delete one UserInternal.
     * @example
     * // Delete one UserInternal
     * const UserInternal = await prisma.userInternal.delete({
     *   where: {
     *     // ... filter to delete one UserInternal
     *   }
     * })
     * 
    **/
    delete<T extends UserInternalDeleteArgs>(
      args: SelectSubset<T, UserInternalDeleteArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Update one UserInternal.
     * @param {UserInternalUpdateArgs} args - Arguments to update one UserInternal.
     * @example
     * // Update one UserInternal
     * const userInternal = await prisma.userInternal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserInternalUpdateArgs>(
      args: SelectSubset<T, UserInternalUpdateArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Delete zero or more UserInternals.
     * @param {UserInternalDeleteManyArgs} args - Arguments to filter UserInternals to delete.
     * @example
     * // Delete a few UserInternals
     * const { count } = await prisma.userInternal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserInternalDeleteManyArgs>(
      args?: SelectSubset<T, UserInternalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInternals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInternals
     * const userInternal = await prisma.userInternal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserInternalUpdateManyArgs>(
      args: SelectSubset<T, UserInternalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInternal.
     * @param {UserInternalUpsertArgs} args - Arguments to update or create a UserInternal.
     * @example
     * // Update or create a UserInternal
     * const userInternal = await prisma.userInternal.upsert({
     *   create: {
     *     // ... data to create a UserInternal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInternal we want to update
     *   }
     * })
    **/
    upsert<T extends UserInternalUpsertArgs>(
      args: SelectSubset<T, UserInternalUpsertArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Count the number of UserInternals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalCountArgs} args - Arguments to filter UserInternals to count.
     * @example
     * // Count the number of UserInternals
     * const count = await prisma.userInternal.count({
     *   where: {
     *     // ... the filter for the UserInternals we want to count
     *   }
     * })
    **/
    count<T extends UserInternalCountArgs>(
      args?: Subset<T, UserInternalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInternalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInternal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserInternalAggregateArgs>(args: Subset<T, UserInternalAggregateArgs>): Prisma.PrismaPromise<GetUserInternalAggregateType<T>>

    /**
     * Group by UserInternal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserInternalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInternalGroupByArgs['orderBy'] }
        : { orderBy?: UserInternalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserInternalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInternalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInternal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserInternalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    coWork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserInternal base type for findUnique actions
   */
  export type UserInternalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternal to fetch.
     */
    where: UserInternalWhereUniqueInput
  }

  /**
   * UserInternal findUnique
   */
  export interface UserInternalFindUniqueArgs extends UserInternalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserInternal findUniqueOrThrow
   */
  export type UserInternalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternal to fetch.
     */
    where: UserInternalWhereUniqueInput
  }


  /**
   * UserInternal base type for findFirst actions
   */
  export type UserInternalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternal to fetch.
     */
    where?: UserInternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInternals to fetch.
     */
    orderBy?: Enumerable<UserInternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInternals.
     */
    cursor?: UserInternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInternals.
     */
    distinct?: Enumerable<UserInternalScalarFieldEnum>
  }

  /**
   * UserInternal findFirst
   */
  export interface UserInternalFindFirstArgs extends UserInternalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserInternal findFirstOrThrow
   */
  export type UserInternalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternal to fetch.
     */
    where?: UserInternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInternals to fetch.
     */
    orderBy?: Enumerable<UserInternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInternals.
     */
    cursor?: UserInternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInternals.
     */
    distinct?: Enumerable<UserInternalScalarFieldEnum>
  }


  /**
   * UserInternal findMany
   */
  export type UserInternalFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternals to fetch.
     */
    where?: UserInternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInternals to fetch.
     */
    orderBy?: Enumerable<UserInternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInternals.
     */
    cursor?: UserInternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInternals.
     */
    skip?: number
    distinct?: Enumerable<UserInternalScalarFieldEnum>
  }


  /**
   * UserInternal create
   */
  export type UserInternalCreateArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * The data needed to create a UserInternal.
     */
    data: XOR<UserInternalCreateInput, UserInternalUncheckedCreateInput>
  }


  /**
   * UserInternal createMany
   */
  export type UserInternalCreateManyArgs = {
    /**
     * The data used to create many UserInternals.
     */
    data: Enumerable<UserInternalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserInternal update
   */
  export type UserInternalUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * The data needed to update a UserInternal.
     */
    data: XOR<UserInternalUpdateInput, UserInternalUncheckedUpdateInput>
    /**
     * Choose, which UserInternal to update.
     */
    where: UserInternalWhereUniqueInput
  }


  /**
   * UserInternal updateMany
   */
  export type UserInternalUpdateManyArgs = {
    /**
     * The data used to update UserInternals.
     */
    data: XOR<UserInternalUpdateManyMutationInput, UserInternalUncheckedUpdateManyInput>
    /**
     * Filter which UserInternals to update
     */
    where?: UserInternalWhereInput
  }


  /**
   * UserInternal upsert
   */
  export type UserInternalUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * The filter to search for the UserInternal to update in case it exists.
     */
    where: UserInternalWhereUniqueInput
    /**
     * In case the UserInternal found by the `where` argument doesn't exist, create a new UserInternal with this data.
     */
    create: XOR<UserInternalCreateInput, UserInternalUncheckedCreateInput>
    /**
     * In case the UserInternal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInternalUpdateInput, UserInternalUncheckedUpdateInput>
  }


  /**
   * UserInternal delete
   */
  export type UserInternalDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter which UserInternal to delete.
     */
    where: UserInternalWhereUniqueInput
  }


  /**
   * UserInternal deleteMany
   */
  export type UserInternalDeleteManyArgs = {
    /**
     * Filter which UserInternals to delete
     */
    where?: UserInternalWhereInput
  }


  /**
   * UserInternal without action
   */
  export type UserInternalArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
  }



  /**
   * Model Room
   */


  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createAt?: true
    updateAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createAt?: true
    updateAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type RoomAggregateArgs = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs = {
    where?: RoomWhereInput
    orderBy?: Enumerable<RoomOrderByWithAggregationInput>
    by: RoomScalarFieldEnum[]
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }


  export type RoomGroupByOutputType = {
    id: number
    name: string
    capacity: number
    createAt: Date
    updateAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    createAt?: boolean
    updateAt?: boolean
    BranchToRoom?: boolean | BranchToRoomArgs
    RoomRate?: boolean | Room$RoomRateArgs
    BookRoom?: boolean | Room$BookRoomArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }


  export type RoomInclude = {
    BranchToRoom?: boolean | BranchToRoomArgs
    RoomRate?: boolean | Room$RoomRateArgs
    BookRoom?: boolean | Room$BookRoomArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }

  export type RoomGetPayload<S extends boolean | null | undefined | RoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Room :
    S extends undefined ? never :
    S extends { include: any } & (RoomArgs | RoomFindManyArgs)
    ? Room  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BranchToRoom' ? BranchToRoomGetPayload<S['include'][P]> | null :
        P extends 'RoomRate' ? Array < RoomRateGetPayload<S['include'][P]>>  :
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoomArgs | RoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BranchToRoom' ? BranchToRoomGetPayload<S['select'][P]> | null :
        P extends 'RoomRate' ? Array < RoomRateGetPayload<S['select'][P]>>  :
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Room ? Room[P] : never
  } 
      : Room


  type RoomCountArgs = 
    Omit<RoomFindManyArgs, 'select' | 'include'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Room'> extends True ? Prisma__RoomClient<RoomGetPayload<T>> : Prisma__RoomClient<RoomGetPayload<T> | null, null>

    /**
     * Find one Room that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoomFindUniqueOrThrowArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Room'> extends True ? Prisma__RoomClient<RoomGetPayload<T>> : Prisma__RoomClient<RoomGetPayload<T> | null, null>

    /**
     * Find the first Room that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoomFindFirstOrThrowArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoomFindManyArgs>(
      args?: SelectSubset<T, RoomFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoomGetPayload<T>>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
    **/
    create<T extends RoomCreateArgs>(
      args: SelectSubset<T, RoomCreateArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Create many Rooms.
     *     @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     *     @example
     *     // Create many Rooms
     *     const room = await prisma.room.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomCreateManyArgs>(
      args?: SelectSubset<T, RoomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
    **/
    delete<T extends RoomDeleteArgs>(
      args: SelectSubset<T, RoomDeleteArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomUpdateArgs>(
      args: SelectSubset<T, RoomUpdateArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomDeleteManyArgs>(
      args?: SelectSubset<T, RoomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomUpdateManyArgs>(
      args: SelectSubset<T, RoomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
    **/
    upsert<T extends RoomUpsertArgs>(
      args: SelectSubset<T, RoomUpsertArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    BranchToRoom<T extends BranchToRoomArgs= {}>(args?: Subset<T, BranchToRoomArgs>): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T> | Null>;

    RoomRate<T extends Room$RoomRateArgs= {}>(args?: Subset<T, Room$RoomRateArgs>): Prisma.PrismaPromise<Array<RoomRateGetPayload<T>>| Null>;

    BookRoom<T extends Room$BookRoomArgs= {}>(args?: Subset<T, Room$BookRoomArgs>): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Room base type for findUnique actions
   */
  export type RoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUnique
   */
  export interface RoomFindUniqueArgs extends RoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room base type for findFirst actions
   */
  export type RoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: Enumerable<RoomScalarFieldEnum>
  }

  /**
   * Room findFirst
   */
  export interface RoomFindFirstArgs extends RoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Room findMany
   */
  export type RoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Room create
   */
  export type RoomCreateArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }


  /**
   * Room createMany
   */
  export type RoomCreateManyArgs = {
    /**
     * The data used to create many Rooms.
     */
    data: Enumerable<RoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Room update
   */
  export type RoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }


  /**
   * Room upsert
   */
  export type RoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }


  /**
   * Room delete
   */
  export type RoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }


  /**
   * Room.RoomRate
   */
  export type Room$RoomRateArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    where?: RoomRateWhereInput
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    cursor?: RoomRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }


  /**
   * Room.BookRoom
   */
  export type Room$BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    cursor?: BookRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * Room without action
   */
  export type RoomArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
  }



  /**
   * Model RoomRate
   */


  export type AggregateRoomRate = {
    _count: RoomRateCountAggregateOutputType | null
    _avg: RoomRateAvgAggregateOutputType | null
    _sum: RoomRateSumAggregateOutputType | null
    _min: RoomRateMinAggregateOutputType | null
    _max: RoomRateMaxAggregateOutputType | null
  }

  export type RoomRateAvgAggregateOutputType = {
    id: number | null
    price: number | null
    durationCategoryId: number | null
    roomId: number | null
  }

  export type RoomRateSumAggregateOutputType = {
    id: number | null
    price: number | null
    durationCategoryId: number | null
    roomId: number | null
  }

  export type RoomRateMinAggregateOutputType = {
    id: number | null
    price: number | null
    createAt: Date | null
    updateAt: Date | null
    durationCategoryId: number | null
    roomId: number | null
    active: boolean | null
  }

  export type RoomRateMaxAggregateOutputType = {
    id: number | null
    price: number | null
    createAt: Date | null
    updateAt: Date | null
    durationCategoryId: number | null
    roomId: number | null
    active: boolean | null
  }

  export type RoomRateCountAggregateOutputType = {
    id: number
    price: number
    createAt: number
    updateAt: number
    durationCategoryId: number
    roomId: number
    active: number
    _all: number
  }


  export type RoomRateAvgAggregateInputType = {
    id?: true
    price?: true
    durationCategoryId?: true
    roomId?: true
  }

  export type RoomRateSumAggregateInputType = {
    id?: true
    price?: true
    durationCategoryId?: true
    roomId?: true
  }

  export type RoomRateMinAggregateInputType = {
    id?: true
    price?: true
    createAt?: true
    updateAt?: true
    durationCategoryId?: true
    roomId?: true
    active?: true
  }

  export type RoomRateMaxAggregateInputType = {
    id?: true
    price?: true
    createAt?: true
    updateAt?: true
    durationCategoryId?: true
    roomId?: true
    active?: true
  }

  export type RoomRateCountAggregateInputType = {
    id?: true
    price?: true
    createAt?: true
    updateAt?: true
    durationCategoryId?: true
    roomId?: true
    active?: true
    _all?: true
  }

  export type RoomRateAggregateArgs = {
    /**
     * Filter which RoomRate to aggregate.
     */
    where?: RoomRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomRates to fetch.
     */
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomRates
    **/
    _count?: true | RoomRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomRateMaxAggregateInputType
  }

  export type GetRoomRateAggregateType<T extends RoomRateAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomRate[P]>
      : GetScalarType<T[P], AggregateRoomRate[P]>
  }




  export type RoomRateGroupByArgs = {
    where?: RoomRateWhereInput
    orderBy?: Enumerable<RoomRateOrderByWithAggregationInput>
    by: RoomRateScalarFieldEnum[]
    having?: RoomRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomRateCountAggregateInputType | true
    _avg?: RoomRateAvgAggregateInputType
    _sum?: RoomRateSumAggregateInputType
    _min?: RoomRateMinAggregateInputType
    _max?: RoomRateMaxAggregateInputType
  }


  export type RoomRateGroupByOutputType = {
    id: number
    price: number | null
    createAt: Date
    updateAt: Date
    durationCategoryId: number
    roomId: number | null
    active: boolean | null
    _count: RoomRateCountAggregateOutputType | null
    _avg: RoomRateAvgAggregateOutputType | null
    _sum: RoomRateSumAggregateOutputType | null
    _min: RoomRateMinAggregateOutputType | null
    _max: RoomRateMaxAggregateOutputType | null
  }

  type GetRoomRateGroupByPayload<T extends RoomRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoomRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomRateGroupByOutputType[P]>
            : GetScalarType<T[P], RoomRateGroupByOutputType[P]>
        }
      >
    >


  export type RoomRateSelect = {
    id?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
    durationCategoryId?: boolean
    roomId?: boolean
    active?: boolean
    BookRoom?: boolean | RoomRate$BookRoomArgs
    duration?: boolean | durationCategoryArgs
    room?: boolean | RoomArgs
    _count?: boolean | RoomRateCountOutputTypeArgs
  }


  export type RoomRateInclude = {
    BookRoom?: boolean | RoomRate$BookRoomArgs
    duration?: boolean | durationCategoryArgs
    room?: boolean | RoomArgs
    _count?: boolean | RoomRateCountOutputTypeArgs
  }

  export type RoomRateGetPayload<S extends boolean | null | undefined | RoomRateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomRate :
    S extends undefined ? never :
    S extends { include: any } & (RoomRateArgs | RoomRateFindManyArgs)
    ? RoomRate  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['include'][P]>>  :
        P extends 'duration' ? durationCategoryGetPayload<S['include'][P]> :
        P extends 'room' ? RoomGetPayload<S['include'][P]> | null :
        P extends '_count' ? RoomRateCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoomRateArgs | RoomRateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['select'][P]>>  :
        P extends 'duration' ? durationCategoryGetPayload<S['select'][P]> :
        P extends 'room' ? RoomGetPayload<S['select'][P]> | null :
        P extends '_count' ? RoomRateCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RoomRate ? RoomRate[P] : never
  } 
      : RoomRate


  type RoomRateCountArgs = 
    Omit<RoomRateFindManyArgs, 'select' | 'include'> & {
      select?: RoomRateCountAggregateInputType | true
    }

  export interface RoomRateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoomRate that matches the filter.
     * @param {RoomRateFindUniqueArgs} args - Arguments to find a RoomRate
     * @example
     * // Get one RoomRate
     * const roomRate = await prisma.roomRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomRateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoomRateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoomRate'> extends True ? Prisma__RoomRateClient<RoomRateGetPayload<T>> : Prisma__RoomRateClient<RoomRateGetPayload<T> | null, null>

    /**
     * Find one RoomRate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomRateFindUniqueOrThrowArgs} args - Arguments to find a RoomRate
     * @example
     * // Get one RoomRate
     * const roomRate = await prisma.roomRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomRateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoomRateFindUniqueOrThrowArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Find the first RoomRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateFindFirstArgs} args - Arguments to find a RoomRate
     * @example
     * // Get one RoomRate
     * const roomRate = await prisma.roomRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomRateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoomRateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoomRate'> extends True ? Prisma__RoomRateClient<RoomRateGetPayload<T>> : Prisma__RoomRateClient<RoomRateGetPayload<T> | null, null>

    /**
     * Find the first RoomRate that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateFindFirstOrThrowArgs} args - Arguments to find a RoomRate
     * @example
     * // Get one RoomRate
     * const roomRate = await prisma.roomRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomRateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoomRateFindFirstOrThrowArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Find zero or more RoomRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomRates
     * const roomRates = await prisma.roomRate.findMany()
     * 
     * // Get first 10 RoomRates
     * const roomRates = await prisma.roomRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomRateWithIdOnly = await prisma.roomRate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoomRateFindManyArgs>(
      args?: SelectSubset<T, RoomRateFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoomRateGetPayload<T>>>

    /**
     * Create a RoomRate.
     * @param {RoomRateCreateArgs} args - Arguments to create a RoomRate.
     * @example
     * // Create one RoomRate
     * const RoomRate = await prisma.roomRate.create({
     *   data: {
     *     // ... data to create a RoomRate
     *   }
     * })
     * 
    **/
    create<T extends RoomRateCreateArgs>(
      args: SelectSubset<T, RoomRateCreateArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Create many RoomRates.
     *     @param {RoomRateCreateManyArgs} args - Arguments to create many RoomRates.
     *     @example
     *     // Create many RoomRates
     *     const roomRate = await prisma.roomRate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomRateCreateManyArgs>(
      args?: SelectSubset<T, RoomRateCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomRate.
     * @param {RoomRateDeleteArgs} args - Arguments to delete one RoomRate.
     * @example
     * // Delete one RoomRate
     * const RoomRate = await prisma.roomRate.delete({
     *   where: {
     *     // ... filter to delete one RoomRate
     *   }
     * })
     * 
    **/
    delete<T extends RoomRateDeleteArgs>(
      args: SelectSubset<T, RoomRateDeleteArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Update one RoomRate.
     * @param {RoomRateUpdateArgs} args - Arguments to update one RoomRate.
     * @example
     * // Update one RoomRate
     * const roomRate = await prisma.roomRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomRateUpdateArgs>(
      args: SelectSubset<T, RoomRateUpdateArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Delete zero or more RoomRates.
     * @param {RoomRateDeleteManyArgs} args - Arguments to filter RoomRates to delete.
     * @example
     * // Delete a few RoomRates
     * const { count } = await prisma.roomRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomRateDeleteManyArgs>(
      args?: SelectSubset<T, RoomRateDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomRates
     * const roomRate = await prisma.roomRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomRateUpdateManyArgs>(
      args: SelectSubset<T, RoomRateUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomRate.
     * @param {RoomRateUpsertArgs} args - Arguments to update or create a RoomRate.
     * @example
     * // Update or create a RoomRate
     * const roomRate = await prisma.roomRate.upsert({
     *   create: {
     *     // ... data to create a RoomRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomRate we want to update
     *   }
     * })
    **/
    upsert<T extends RoomRateUpsertArgs>(
      args: SelectSubset<T, RoomRateUpsertArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Count the number of RoomRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateCountArgs} args - Arguments to filter RoomRates to count.
     * @example
     * // Count the number of RoomRates
     * const count = await prisma.roomRate.count({
     *   where: {
     *     // ... the filter for the RoomRates we want to count
     *   }
     * })
    **/
    count<T extends RoomRateCountArgs>(
      args?: Subset<T, RoomRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomRateAggregateArgs>(args: Subset<T, RoomRateAggregateArgs>): Prisma.PrismaPromise<GetRoomRateAggregateType<T>>

    /**
     * Group by RoomRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomRateGroupByArgs['orderBy'] }
        : { orderBy?: RoomRateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoomRateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    BookRoom<T extends RoomRate$BookRoomArgs= {}>(args?: Subset<T, RoomRate$BookRoomArgs>): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>| Null>;

    duration<T extends durationCategoryArgs= {}>(args?: Subset<T, durationCategoryArgs>): Prisma__durationCategoryClient<durationCategoryGetPayload<T> | Null>;

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RoomRate base type for findUnique actions
   */
  export type RoomRateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRate to fetch.
     */
    where: RoomRateWhereUniqueInput
  }

  /**
   * RoomRate findUnique
   */
  export interface RoomRateFindUniqueArgs extends RoomRateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoomRate findUniqueOrThrow
   */
  export type RoomRateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRate to fetch.
     */
    where: RoomRateWhereUniqueInput
  }


  /**
   * RoomRate base type for findFirst actions
   */
  export type RoomRateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRate to fetch.
     */
    where?: RoomRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomRates to fetch.
     */
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomRates.
     */
    cursor?: RoomRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomRates.
     */
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }

  /**
   * RoomRate findFirst
   */
  export interface RoomRateFindFirstArgs extends RoomRateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoomRate findFirstOrThrow
   */
  export type RoomRateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRate to fetch.
     */
    where?: RoomRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomRates to fetch.
     */
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomRates.
     */
    cursor?: RoomRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomRates.
     */
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }


  /**
   * RoomRate findMany
   */
  export type RoomRateFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRates to fetch.
     */
    where?: RoomRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomRates to fetch.
     */
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomRates.
     */
    cursor?: RoomRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomRates.
     */
    skip?: number
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }


  /**
   * RoomRate create
   */
  export type RoomRateCreateArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * The data needed to create a RoomRate.
     */
    data: XOR<RoomRateCreateInput, RoomRateUncheckedCreateInput>
  }


  /**
   * RoomRate createMany
   */
  export type RoomRateCreateManyArgs = {
    /**
     * The data used to create many RoomRates.
     */
    data: Enumerable<RoomRateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoomRate update
   */
  export type RoomRateUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * The data needed to update a RoomRate.
     */
    data: XOR<RoomRateUpdateInput, RoomRateUncheckedUpdateInput>
    /**
     * Choose, which RoomRate to update.
     */
    where: RoomRateWhereUniqueInput
  }


  /**
   * RoomRate updateMany
   */
  export type RoomRateUpdateManyArgs = {
    /**
     * The data used to update RoomRates.
     */
    data: XOR<RoomRateUpdateManyMutationInput, RoomRateUncheckedUpdateManyInput>
    /**
     * Filter which RoomRates to update
     */
    where?: RoomRateWhereInput
  }


  /**
   * RoomRate upsert
   */
  export type RoomRateUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * The filter to search for the RoomRate to update in case it exists.
     */
    where: RoomRateWhereUniqueInput
    /**
     * In case the RoomRate found by the `where` argument doesn't exist, create a new RoomRate with this data.
     */
    create: XOR<RoomRateCreateInput, RoomRateUncheckedCreateInput>
    /**
     * In case the RoomRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomRateUpdateInput, RoomRateUncheckedUpdateInput>
  }


  /**
   * RoomRate delete
   */
  export type RoomRateDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter which RoomRate to delete.
     */
    where: RoomRateWhereUniqueInput
  }


  /**
   * RoomRate deleteMany
   */
  export type RoomRateDeleteManyArgs = {
    /**
     * Filter which RoomRates to delete
     */
    where?: RoomRateWhereInput
  }


  /**
   * RoomRate.BookRoom
   */
  export type RoomRate$BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    cursor?: BookRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * RoomRate without action
   */
  export type RoomRateArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
  }



  /**
   * Model durationCategory
   */


  export type AggregateDurationCategory = {
    _count: DurationCategoryCountAggregateOutputType | null
    _avg: DurationCategoryAvgAggregateOutputType | null
    _sum: DurationCategorySumAggregateOutputType | null
    _min: DurationCategoryMinAggregateOutputType | null
    _max: DurationCategoryMaxAggregateOutputType | null
  }

  export type DurationCategoryAvgAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type DurationCategorySumAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type DurationCategoryMinAggregateOutputType = {
    id: number | null
    duration: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DurationCategoryMaxAggregateOutputType = {
    id: number | null
    duration: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DurationCategoryCountAggregateOutputType = {
    id: number
    duration: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DurationCategoryAvgAggregateInputType = {
    id?: true
    duration?: true
  }

  export type DurationCategorySumAggregateInputType = {
    id?: true
    duration?: true
  }

  export type DurationCategoryMinAggregateInputType = {
    id?: true
    duration?: true
    createAt?: true
    updateAt?: true
  }

  export type DurationCategoryMaxAggregateInputType = {
    id?: true
    duration?: true
    createAt?: true
    updateAt?: true
  }

  export type DurationCategoryCountAggregateInputType = {
    id?: true
    duration?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DurationCategoryAggregateArgs = {
    /**
     * Filter which durationCategory to aggregate.
     */
    where?: durationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of durationCategories to fetch.
     */
    orderBy?: Enumerable<durationCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: durationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` durationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` durationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned durationCategories
    **/
    _count?: true | DurationCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DurationCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DurationCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DurationCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DurationCategoryMaxAggregateInputType
  }

  export type GetDurationCategoryAggregateType<T extends DurationCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDurationCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDurationCategory[P]>
      : GetScalarType<T[P], AggregateDurationCategory[P]>
  }




  export type DurationCategoryGroupByArgs = {
    where?: durationCategoryWhereInput
    orderBy?: Enumerable<durationCategoryOrderByWithAggregationInput>
    by: DurationCategoryScalarFieldEnum[]
    having?: durationCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DurationCategoryCountAggregateInputType | true
    _avg?: DurationCategoryAvgAggregateInputType
    _sum?: DurationCategorySumAggregateInputType
    _min?: DurationCategoryMinAggregateInputType
    _max?: DurationCategoryMaxAggregateInputType
  }


  export type DurationCategoryGroupByOutputType = {
    id: number
    duration: number
    createAt: Date
    updateAt: Date
    _count: DurationCategoryCountAggregateOutputType | null
    _avg: DurationCategoryAvgAggregateOutputType | null
    _sum: DurationCategorySumAggregateOutputType | null
    _min: DurationCategoryMinAggregateOutputType | null
    _max: DurationCategoryMaxAggregateOutputType | null
  }

  type GetDurationCategoryGroupByPayload<T extends DurationCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DurationCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DurationCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DurationCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DurationCategoryGroupByOutputType[P]>
        }
      >
    >


  export type durationCategorySelect = {
    id?: boolean
    duration?: boolean
    createAt?: boolean
    updateAt?: boolean
    RoomRate?: boolean | durationCategory$RoomRateArgs
    _count?: boolean | DurationCategoryCountOutputTypeArgs
  }


  export type durationCategoryInclude = {
    RoomRate?: boolean | durationCategory$RoomRateArgs
    _count?: boolean | DurationCategoryCountOutputTypeArgs
  }

  export type durationCategoryGetPayload<S extends boolean | null | undefined | durationCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? durationCategory :
    S extends undefined ? never :
    S extends { include: any } & (durationCategoryArgs | durationCategoryFindManyArgs)
    ? durationCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'RoomRate' ? Array < RoomRateGetPayload<S['include'][P]>>  :
        P extends '_count' ? DurationCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (durationCategoryArgs | durationCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'RoomRate' ? Array < RoomRateGetPayload<S['select'][P]>>  :
        P extends '_count' ? DurationCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof durationCategory ? durationCategory[P] : never
  } 
      : durationCategory


  type durationCategoryCountArgs = 
    Omit<durationCategoryFindManyArgs, 'select' | 'include'> & {
      select?: DurationCategoryCountAggregateInputType | true
    }

  export interface durationCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DurationCategory that matches the filter.
     * @param {durationCategoryFindUniqueArgs} args - Arguments to find a DurationCategory
     * @example
     * // Get one DurationCategory
     * const durationCategory = await prisma.durationCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends durationCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, durationCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'durationCategory'> extends True ? Prisma__durationCategoryClient<durationCategoryGetPayload<T>> : Prisma__durationCategoryClient<durationCategoryGetPayload<T> | null, null>

    /**
     * Find one DurationCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {durationCategoryFindUniqueOrThrowArgs} args - Arguments to find a DurationCategory
     * @example
     * // Get one DurationCategory
     * const durationCategory = await prisma.durationCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends durationCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, durationCategoryFindUniqueOrThrowArgs>
    ): Prisma__durationCategoryClient<durationCategoryGetPayload<T>>

    /**
     * Find the first DurationCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {durationCategoryFindFirstArgs} args - Arguments to find a DurationCategory
     * @example
     * // Get one DurationCategory
     * const durationCategory = await prisma.durationCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends durationCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, durationCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'durationCategory'> extends True ? Prisma__durationCategoryClient<durationCategoryGetPayload<T>> : Prisma__durationCategoryClient<durationCategoryGetPayload<T> | null, null>

    /**
     * Find the first DurationCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {durationCategoryFindFirstOrThrowArgs} args - Arguments to find a DurationCategory
     * @example
     * // Get one DurationCategory
     * const durationCategory = await prisma.durationCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends durationCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, durationCategoryFindFirstOrThrowArgs>
    ): Prisma__durationCategoryClient<durationCategoryGetPayload<T>>

    /**
     * Find zero or more DurationCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {durationCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DurationCategories
     * const durationCategories = await prisma.durationCategory.findMany()
     * 
     * // Get first 10 DurationCategories
     * const durationCategories = await prisma.durationCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const durationCategoryWithIdOnly = await prisma.durationCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends durationCategoryFindManyArgs>(
      args?: SelectSubset<T, durationCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<durationCategoryGetPayload<T>>>

    /**
     * Create a DurationCategory.
     * @param {durationCategoryCreateArgs} args - Arguments to create a DurationCategory.
     * @example
     * // Create one DurationCategory
     * const DurationCategory = await prisma.durationCategory.create({
     *   data: {
     *     // ... data to create a DurationCategory
     *   }
     * })
     * 
    **/
    create<T extends durationCategoryCreateArgs>(
      args: SelectSubset<T, durationCategoryCreateArgs>
    ): Prisma__durationCategoryClient<durationCategoryGetPayload<T>>

    /**
     * Create many DurationCategories.
     *     @param {durationCategoryCreateManyArgs} args - Arguments to create many DurationCategories.
     *     @example
     *     // Create many DurationCategories
     *     const durationCategory = await prisma.durationCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends durationCategoryCreateManyArgs>(
      args?: SelectSubset<T, durationCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DurationCategory.
     * @param {durationCategoryDeleteArgs} args - Arguments to delete one DurationCategory.
     * @example
     * // Delete one DurationCategory
     * const DurationCategory = await prisma.durationCategory.delete({
     *   where: {
     *     // ... filter to delete one DurationCategory
     *   }
     * })
     * 
    **/
    delete<T extends durationCategoryDeleteArgs>(
      args: SelectSubset<T, durationCategoryDeleteArgs>
    ): Prisma__durationCategoryClient<durationCategoryGetPayload<T>>

    /**
     * Update one DurationCategory.
     * @param {durationCategoryUpdateArgs} args - Arguments to update one DurationCategory.
     * @example
     * // Update one DurationCategory
     * const durationCategory = await prisma.durationCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends durationCategoryUpdateArgs>(
      args: SelectSubset<T, durationCategoryUpdateArgs>
    ): Prisma__durationCategoryClient<durationCategoryGetPayload<T>>

    /**
     * Delete zero or more DurationCategories.
     * @param {durationCategoryDeleteManyArgs} args - Arguments to filter DurationCategories to delete.
     * @example
     * // Delete a few DurationCategories
     * const { count } = await prisma.durationCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends durationCategoryDeleteManyArgs>(
      args?: SelectSubset<T, durationCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DurationCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {durationCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DurationCategories
     * const durationCategory = await prisma.durationCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends durationCategoryUpdateManyArgs>(
      args: SelectSubset<T, durationCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DurationCategory.
     * @param {durationCategoryUpsertArgs} args - Arguments to update or create a DurationCategory.
     * @example
     * // Update or create a DurationCategory
     * const durationCategory = await prisma.durationCategory.upsert({
     *   create: {
     *     // ... data to create a DurationCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DurationCategory we want to update
     *   }
     * })
    **/
    upsert<T extends durationCategoryUpsertArgs>(
      args: SelectSubset<T, durationCategoryUpsertArgs>
    ): Prisma__durationCategoryClient<durationCategoryGetPayload<T>>

    /**
     * Count the number of DurationCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {durationCategoryCountArgs} args - Arguments to filter DurationCategories to count.
     * @example
     * // Count the number of DurationCategories
     * const count = await prisma.durationCategory.count({
     *   where: {
     *     // ... the filter for the DurationCategories we want to count
     *   }
     * })
    **/
    count<T extends durationCategoryCountArgs>(
      args?: Subset<T, durationCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DurationCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DurationCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurationCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DurationCategoryAggregateArgs>(args: Subset<T, DurationCategoryAggregateArgs>): Prisma.PrismaPromise<GetDurationCategoryAggregateType<T>>

    /**
     * Group by DurationCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurationCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DurationCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DurationCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DurationCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DurationCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDurationCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for durationCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__durationCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    RoomRate<T extends durationCategory$RoomRateArgs= {}>(args?: Subset<T, durationCategory$RoomRateArgs>): Prisma.PrismaPromise<Array<RoomRateGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * durationCategory base type for findUnique actions
   */
  export type durationCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * Filter, which durationCategory to fetch.
     */
    where: durationCategoryWhereUniqueInput
  }

  /**
   * durationCategory findUnique
   */
  export interface durationCategoryFindUniqueArgs extends durationCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * durationCategory findUniqueOrThrow
   */
  export type durationCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * Filter, which durationCategory to fetch.
     */
    where: durationCategoryWhereUniqueInput
  }


  /**
   * durationCategory base type for findFirst actions
   */
  export type durationCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * Filter, which durationCategory to fetch.
     */
    where?: durationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of durationCategories to fetch.
     */
    orderBy?: Enumerable<durationCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for durationCategories.
     */
    cursor?: durationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` durationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` durationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of durationCategories.
     */
    distinct?: Enumerable<DurationCategoryScalarFieldEnum>
  }

  /**
   * durationCategory findFirst
   */
  export interface durationCategoryFindFirstArgs extends durationCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * durationCategory findFirstOrThrow
   */
  export type durationCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * Filter, which durationCategory to fetch.
     */
    where?: durationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of durationCategories to fetch.
     */
    orderBy?: Enumerable<durationCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for durationCategories.
     */
    cursor?: durationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` durationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` durationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of durationCategories.
     */
    distinct?: Enumerable<DurationCategoryScalarFieldEnum>
  }


  /**
   * durationCategory findMany
   */
  export type durationCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * Filter, which durationCategories to fetch.
     */
    where?: durationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of durationCategories to fetch.
     */
    orderBy?: Enumerable<durationCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing durationCategories.
     */
    cursor?: durationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` durationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` durationCategories.
     */
    skip?: number
    distinct?: Enumerable<DurationCategoryScalarFieldEnum>
  }


  /**
   * durationCategory create
   */
  export type durationCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * The data needed to create a durationCategory.
     */
    data: XOR<durationCategoryCreateInput, durationCategoryUncheckedCreateInput>
  }


  /**
   * durationCategory createMany
   */
  export type durationCategoryCreateManyArgs = {
    /**
     * The data used to create many durationCategories.
     */
    data: Enumerable<durationCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * durationCategory update
   */
  export type durationCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * The data needed to update a durationCategory.
     */
    data: XOR<durationCategoryUpdateInput, durationCategoryUncheckedUpdateInput>
    /**
     * Choose, which durationCategory to update.
     */
    where: durationCategoryWhereUniqueInput
  }


  /**
   * durationCategory updateMany
   */
  export type durationCategoryUpdateManyArgs = {
    /**
     * The data used to update durationCategories.
     */
    data: XOR<durationCategoryUpdateManyMutationInput, durationCategoryUncheckedUpdateManyInput>
    /**
     * Filter which durationCategories to update
     */
    where?: durationCategoryWhereInput
  }


  /**
   * durationCategory upsert
   */
  export type durationCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * The filter to search for the durationCategory to update in case it exists.
     */
    where: durationCategoryWhereUniqueInput
    /**
     * In case the durationCategory found by the `where` argument doesn't exist, create a new durationCategory with this data.
     */
    create: XOR<durationCategoryCreateInput, durationCategoryUncheckedCreateInput>
    /**
     * In case the durationCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<durationCategoryUpdateInput, durationCategoryUncheckedUpdateInput>
  }


  /**
   * durationCategory delete
   */
  export type durationCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
    /**
     * Filter which durationCategory to delete.
     */
    where: durationCategoryWhereUniqueInput
  }


  /**
   * durationCategory deleteMany
   */
  export type durationCategoryDeleteManyArgs = {
    /**
     * Filter which durationCategories to delete
     */
    where?: durationCategoryWhereInput
  }


  /**
   * durationCategory.RoomRate
   */
  export type durationCategory$RoomRateArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    where?: RoomRateWhereInput
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    cursor?: RoomRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }


  /**
   * durationCategory without action
   */
  export type durationCategoryArgs = {
    /**
     * Select specific fields to fetch from the durationCategory
     */
    select?: durationCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: durationCategoryInclude | null
  }



  /**
   * Model Facility
   */


  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    id: number | null
  }

  export type FacilitySumAggregateOutputType = {
    id: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    id?: true
  }

  export type FacilitySumAggregateInputType = {
    id?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type FacilityAggregateArgs = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs = {
    where?: FacilityWhereInput
    orderBy?: Enumerable<FacilityOrderByWithAggregationInput>
    by: FacilityScalarFieldEnum[]
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }


  export type FacilityGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    updateAt: Date
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect = {
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    FacilityToCoWork?: boolean | Facility$FacilityToCoWorkArgs
    _count?: boolean | FacilityCountOutputTypeArgs
  }


  export type FacilityInclude = {
    FacilityToCoWork?: boolean | Facility$FacilityToCoWorkArgs
    _count?: boolean | FacilityCountOutputTypeArgs
  }

  export type FacilityGetPayload<S extends boolean | null | undefined | FacilityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Facility :
    S extends undefined ? never :
    S extends { include: any } & (FacilityArgs | FacilityFindManyArgs)
    ? Facility  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'FacilityToCoWork' ? Array < FacilityToCoWorkGetPayload<S['include'][P]>>  :
        P extends '_count' ? FacilityCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FacilityArgs | FacilityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'FacilityToCoWork' ? Array < FacilityToCoWorkGetPayload<S['select'][P]>>  :
        P extends '_count' ? FacilityCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Facility ? Facility[P] : never
  } 
      : Facility


  type FacilityCountArgs = 
    Omit<FacilityFindManyArgs, 'select' | 'include'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacilityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FacilityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Facility'> extends True ? Prisma__FacilityClient<FacilityGetPayload<T>> : Prisma__FacilityClient<FacilityGetPayload<T> | null, null>

    /**
     * Find one Facility that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FacilityFindUniqueOrThrowArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacilityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FacilityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Facility'> extends True ? Prisma__FacilityClient<FacilityGetPayload<T>> : Prisma__FacilityClient<FacilityGetPayload<T> | null, null>

    /**
     * Find the first Facility that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacilityFindFirstOrThrowArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacilityFindManyArgs>(
      args?: SelectSubset<T, FacilityFindManyArgs>
    ): Prisma.PrismaPromise<Array<FacilityGetPayload<T>>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
    **/
    create<T extends FacilityCreateArgs>(
      args: SelectSubset<T, FacilityCreateArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Create many Facilities.
     *     @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     *     @example
     *     // Create many Facilities
     *     const facility = await prisma.facility.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacilityCreateManyArgs>(
      args?: SelectSubset<T, FacilityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
    **/
    delete<T extends FacilityDeleteArgs>(
      args: SelectSubset<T, FacilityDeleteArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacilityUpdateArgs>(
      args: SelectSubset<T, FacilityUpdateArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacilityDeleteManyArgs>(
      args?: SelectSubset<T, FacilityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacilityUpdateManyArgs>(
      args: SelectSubset<T, FacilityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
    **/
    upsert<T extends FacilityUpsertArgs>(
      args: SelectSubset<T, FacilityUpsertArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FacilityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    FacilityToCoWork<T extends Facility$FacilityToCoWorkArgs= {}>(args?: Subset<T, Facility$FacilityToCoWorkArgs>): Prisma.PrismaPromise<Array<FacilityToCoWorkGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Facility base type for findUnique actions
   */
  export type FacilityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUnique
   */
  export interface FacilityFindUniqueArgs extends FacilityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility base type for findFirst actions
   */
  export type FacilityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }

  /**
   * Facility findFirst
   */
  export interface FacilityFindFirstArgs extends FacilityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }


  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }


  /**
   * Facility create
   */
  export type FacilityCreateArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }


  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs = {
    /**
     * The data used to create many Facilities.
     */
    data: Enumerable<FacilityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Facility update
   */
  export type FacilityUpdateArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
  }


  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }


  /**
   * Facility delete
   */
  export type FacilityDeleteArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
  }


  /**
   * Facility.FacilityToCoWork
   */
  export type Facility$FacilityToCoWorkArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    where?: FacilityToCoWorkWhereInput
    orderBy?: Enumerable<FacilityToCoWorkOrderByWithRelationInput>
    cursor?: FacilityToCoWorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FacilityToCoWorkScalarFieldEnum>
  }


  /**
   * Facility without action
   */
  export type FacilityArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
  }



  /**
   * Model FacilityToCoWork
   */


  export type AggregateFacilityToCoWork = {
    _count: FacilityToCoWorkCountAggregateOutputType | null
    _avg: FacilityToCoWorkAvgAggregateOutputType | null
    _sum: FacilityToCoWorkSumAggregateOutputType | null
    _min: FacilityToCoWorkMinAggregateOutputType | null
    _max: FacilityToCoWorkMaxAggregateOutputType | null
  }

  export type FacilityToCoWorkAvgAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    facilityId: number | null
  }

  export type FacilityToCoWorkSumAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    facilityId: number | null
  }

  export type FacilityToCoWorkMinAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    facilityId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FacilityToCoWorkMaxAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    facilityId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FacilityToCoWorkCountAggregateOutputType = {
    id: number
    coWorkId: number
    facilityId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type FacilityToCoWorkAvgAggregateInputType = {
    id?: true
    coWorkId?: true
    facilityId?: true
  }

  export type FacilityToCoWorkSumAggregateInputType = {
    id?: true
    coWorkId?: true
    facilityId?: true
  }

  export type FacilityToCoWorkMinAggregateInputType = {
    id?: true
    coWorkId?: true
    facilityId?: true
    createAt?: true
    updateAt?: true
  }

  export type FacilityToCoWorkMaxAggregateInputType = {
    id?: true
    coWorkId?: true
    facilityId?: true
    createAt?: true
    updateAt?: true
  }

  export type FacilityToCoWorkCountAggregateInputType = {
    id?: true
    coWorkId?: true
    facilityId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type FacilityToCoWorkAggregateArgs = {
    /**
     * Filter which FacilityToCoWork to aggregate.
     */
    where?: FacilityToCoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityToCoWorks to fetch.
     */
    orderBy?: Enumerable<FacilityToCoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityToCoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityToCoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityToCoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilityToCoWorks
    **/
    _count?: true | FacilityToCoWorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityToCoWorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilityToCoWorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityToCoWorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityToCoWorkMaxAggregateInputType
  }

  export type GetFacilityToCoWorkAggregateType<T extends FacilityToCoWorkAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilityToCoWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilityToCoWork[P]>
      : GetScalarType<T[P], AggregateFacilityToCoWork[P]>
  }




  export type FacilityToCoWorkGroupByArgs = {
    where?: FacilityToCoWorkWhereInput
    orderBy?: Enumerable<FacilityToCoWorkOrderByWithAggregationInput>
    by: FacilityToCoWorkScalarFieldEnum[]
    having?: FacilityToCoWorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityToCoWorkCountAggregateInputType | true
    _avg?: FacilityToCoWorkAvgAggregateInputType
    _sum?: FacilityToCoWorkSumAggregateInputType
    _min?: FacilityToCoWorkMinAggregateInputType
    _max?: FacilityToCoWorkMaxAggregateInputType
  }


  export type FacilityToCoWorkGroupByOutputType = {
    id: number
    coWorkId: number
    facilityId: number
    createAt: Date
    updateAt: Date
    _count: FacilityToCoWorkCountAggregateOutputType | null
    _avg: FacilityToCoWorkAvgAggregateOutputType | null
    _sum: FacilityToCoWorkSumAggregateOutputType | null
    _min: FacilityToCoWorkMinAggregateOutputType | null
    _max: FacilityToCoWorkMaxAggregateOutputType | null
  }

  type GetFacilityToCoWorkGroupByPayload<T extends FacilityToCoWorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FacilityToCoWorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityToCoWorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityToCoWorkGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityToCoWorkGroupByOutputType[P]>
        }
      >
    >


  export type FacilityToCoWorkSelect = {
    id?: boolean
    coWorkId?: boolean
    facilityId?: boolean
    createAt?: boolean
    updateAt?: boolean
    coWork?: boolean | CoWorkArgs
    facility?: boolean | FacilityArgs
  }


  export type FacilityToCoWorkInclude = {
    coWork?: boolean | CoWorkArgs
    facility?: boolean | FacilityArgs
  }

  export type FacilityToCoWorkGetPayload<S extends boolean | null | undefined | FacilityToCoWorkArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FacilityToCoWork :
    S extends undefined ? never :
    S extends { include: any } & (FacilityToCoWorkArgs | FacilityToCoWorkFindManyArgs)
    ? FacilityToCoWork  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['include'][P]> :
        P extends 'facility' ? FacilityGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FacilityToCoWorkArgs | FacilityToCoWorkFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['select'][P]> :
        P extends 'facility' ? FacilityGetPayload<S['select'][P]> :  P extends keyof FacilityToCoWork ? FacilityToCoWork[P] : never
  } 
      : FacilityToCoWork


  type FacilityToCoWorkCountArgs = 
    Omit<FacilityToCoWorkFindManyArgs, 'select' | 'include'> & {
      select?: FacilityToCoWorkCountAggregateInputType | true
    }

  export interface FacilityToCoWorkDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FacilityToCoWork that matches the filter.
     * @param {FacilityToCoWorkFindUniqueArgs} args - Arguments to find a FacilityToCoWork
     * @example
     * // Get one FacilityToCoWork
     * const facilityToCoWork = await prisma.facilityToCoWork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacilityToCoWorkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FacilityToCoWorkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FacilityToCoWork'> extends True ? Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T>> : Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T> | null, null>

    /**
     * Find one FacilityToCoWork that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FacilityToCoWorkFindUniqueOrThrowArgs} args - Arguments to find a FacilityToCoWork
     * @example
     * // Get one FacilityToCoWork
     * const facilityToCoWork = await prisma.facilityToCoWork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacilityToCoWorkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FacilityToCoWorkFindUniqueOrThrowArgs>
    ): Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T>>

    /**
     * Find the first FacilityToCoWork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToCoWorkFindFirstArgs} args - Arguments to find a FacilityToCoWork
     * @example
     * // Get one FacilityToCoWork
     * const facilityToCoWork = await prisma.facilityToCoWork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacilityToCoWorkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FacilityToCoWorkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FacilityToCoWork'> extends True ? Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T>> : Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T> | null, null>

    /**
     * Find the first FacilityToCoWork that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToCoWorkFindFirstOrThrowArgs} args - Arguments to find a FacilityToCoWork
     * @example
     * // Get one FacilityToCoWork
     * const facilityToCoWork = await prisma.facilityToCoWork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacilityToCoWorkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacilityToCoWorkFindFirstOrThrowArgs>
    ): Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T>>

    /**
     * Find zero or more FacilityToCoWorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToCoWorkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilityToCoWorks
     * const facilityToCoWorks = await prisma.facilityToCoWork.findMany()
     * 
     * // Get first 10 FacilityToCoWorks
     * const facilityToCoWorks = await prisma.facilityToCoWork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityToCoWorkWithIdOnly = await prisma.facilityToCoWork.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacilityToCoWorkFindManyArgs>(
      args?: SelectSubset<T, FacilityToCoWorkFindManyArgs>
    ): Prisma.PrismaPromise<Array<FacilityToCoWorkGetPayload<T>>>

    /**
     * Create a FacilityToCoWork.
     * @param {FacilityToCoWorkCreateArgs} args - Arguments to create a FacilityToCoWork.
     * @example
     * // Create one FacilityToCoWork
     * const FacilityToCoWork = await prisma.facilityToCoWork.create({
     *   data: {
     *     // ... data to create a FacilityToCoWork
     *   }
     * })
     * 
    **/
    create<T extends FacilityToCoWorkCreateArgs>(
      args: SelectSubset<T, FacilityToCoWorkCreateArgs>
    ): Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T>>

    /**
     * Create many FacilityToCoWorks.
     *     @param {FacilityToCoWorkCreateManyArgs} args - Arguments to create many FacilityToCoWorks.
     *     @example
     *     // Create many FacilityToCoWorks
     *     const facilityToCoWork = await prisma.facilityToCoWork.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacilityToCoWorkCreateManyArgs>(
      args?: SelectSubset<T, FacilityToCoWorkCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacilityToCoWork.
     * @param {FacilityToCoWorkDeleteArgs} args - Arguments to delete one FacilityToCoWork.
     * @example
     * // Delete one FacilityToCoWork
     * const FacilityToCoWork = await prisma.facilityToCoWork.delete({
     *   where: {
     *     // ... filter to delete one FacilityToCoWork
     *   }
     * })
     * 
    **/
    delete<T extends FacilityToCoWorkDeleteArgs>(
      args: SelectSubset<T, FacilityToCoWorkDeleteArgs>
    ): Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T>>

    /**
     * Update one FacilityToCoWork.
     * @param {FacilityToCoWorkUpdateArgs} args - Arguments to update one FacilityToCoWork.
     * @example
     * // Update one FacilityToCoWork
     * const facilityToCoWork = await prisma.facilityToCoWork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacilityToCoWorkUpdateArgs>(
      args: SelectSubset<T, FacilityToCoWorkUpdateArgs>
    ): Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T>>

    /**
     * Delete zero or more FacilityToCoWorks.
     * @param {FacilityToCoWorkDeleteManyArgs} args - Arguments to filter FacilityToCoWorks to delete.
     * @example
     * // Delete a few FacilityToCoWorks
     * const { count } = await prisma.facilityToCoWork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacilityToCoWorkDeleteManyArgs>(
      args?: SelectSubset<T, FacilityToCoWorkDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityToCoWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToCoWorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilityToCoWorks
     * const facilityToCoWork = await prisma.facilityToCoWork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacilityToCoWorkUpdateManyArgs>(
      args: SelectSubset<T, FacilityToCoWorkUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacilityToCoWork.
     * @param {FacilityToCoWorkUpsertArgs} args - Arguments to update or create a FacilityToCoWork.
     * @example
     * // Update or create a FacilityToCoWork
     * const facilityToCoWork = await prisma.facilityToCoWork.upsert({
     *   create: {
     *     // ... data to create a FacilityToCoWork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilityToCoWork we want to update
     *   }
     * })
    **/
    upsert<T extends FacilityToCoWorkUpsertArgs>(
      args: SelectSubset<T, FacilityToCoWorkUpsertArgs>
    ): Prisma__FacilityToCoWorkClient<FacilityToCoWorkGetPayload<T>>

    /**
     * Count the number of FacilityToCoWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToCoWorkCountArgs} args - Arguments to filter FacilityToCoWorks to count.
     * @example
     * // Count the number of FacilityToCoWorks
     * const count = await prisma.facilityToCoWork.count({
     *   where: {
     *     // ... the filter for the FacilityToCoWorks we want to count
     *   }
     * })
    **/
    count<T extends FacilityToCoWorkCountArgs>(
      args?: Subset<T, FacilityToCoWorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityToCoWorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilityToCoWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToCoWorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityToCoWorkAggregateArgs>(args: Subset<T, FacilityToCoWorkAggregateArgs>): Prisma.PrismaPromise<GetFacilityToCoWorkAggregateType<T>>

    /**
     * Group by FacilityToCoWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToCoWorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilityToCoWorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityToCoWorkGroupByArgs['orderBy'] }
        : { orderBy?: FacilityToCoWorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilityToCoWorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityToCoWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilityToCoWork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FacilityToCoWorkClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    coWork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    facility<T extends FacilityArgs= {}>(args?: Subset<T, FacilityArgs>): Prisma__FacilityClient<FacilityGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FacilityToCoWork base type for findUnique actions
   */
  export type FacilityToCoWorkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * Filter, which FacilityToCoWork to fetch.
     */
    where: FacilityToCoWorkWhereUniqueInput
  }

  /**
   * FacilityToCoWork findUnique
   */
  export interface FacilityToCoWorkFindUniqueArgs extends FacilityToCoWorkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FacilityToCoWork findUniqueOrThrow
   */
  export type FacilityToCoWorkFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * Filter, which FacilityToCoWork to fetch.
     */
    where: FacilityToCoWorkWhereUniqueInput
  }


  /**
   * FacilityToCoWork base type for findFirst actions
   */
  export type FacilityToCoWorkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * Filter, which FacilityToCoWork to fetch.
     */
    where?: FacilityToCoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityToCoWorks to fetch.
     */
    orderBy?: Enumerable<FacilityToCoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityToCoWorks.
     */
    cursor?: FacilityToCoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityToCoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityToCoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityToCoWorks.
     */
    distinct?: Enumerable<FacilityToCoWorkScalarFieldEnum>
  }

  /**
   * FacilityToCoWork findFirst
   */
  export interface FacilityToCoWorkFindFirstArgs extends FacilityToCoWorkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FacilityToCoWork findFirstOrThrow
   */
  export type FacilityToCoWorkFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * Filter, which FacilityToCoWork to fetch.
     */
    where?: FacilityToCoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityToCoWorks to fetch.
     */
    orderBy?: Enumerable<FacilityToCoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityToCoWorks.
     */
    cursor?: FacilityToCoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityToCoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityToCoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityToCoWorks.
     */
    distinct?: Enumerable<FacilityToCoWorkScalarFieldEnum>
  }


  /**
   * FacilityToCoWork findMany
   */
  export type FacilityToCoWorkFindManyArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * Filter, which FacilityToCoWorks to fetch.
     */
    where?: FacilityToCoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityToCoWorks to fetch.
     */
    orderBy?: Enumerable<FacilityToCoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilityToCoWorks.
     */
    cursor?: FacilityToCoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityToCoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityToCoWorks.
     */
    skip?: number
    distinct?: Enumerable<FacilityToCoWorkScalarFieldEnum>
  }


  /**
   * FacilityToCoWork create
   */
  export type FacilityToCoWorkCreateArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * The data needed to create a FacilityToCoWork.
     */
    data: XOR<FacilityToCoWorkCreateInput, FacilityToCoWorkUncheckedCreateInput>
  }


  /**
   * FacilityToCoWork createMany
   */
  export type FacilityToCoWorkCreateManyArgs = {
    /**
     * The data used to create many FacilityToCoWorks.
     */
    data: Enumerable<FacilityToCoWorkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FacilityToCoWork update
   */
  export type FacilityToCoWorkUpdateArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * The data needed to update a FacilityToCoWork.
     */
    data: XOR<FacilityToCoWorkUpdateInput, FacilityToCoWorkUncheckedUpdateInput>
    /**
     * Choose, which FacilityToCoWork to update.
     */
    where: FacilityToCoWorkWhereUniqueInput
  }


  /**
   * FacilityToCoWork updateMany
   */
  export type FacilityToCoWorkUpdateManyArgs = {
    /**
     * The data used to update FacilityToCoWorks.
     */
    data: XOR<FacilityToCoWorkUpdateManyMutationInput, FacilityToCoWorkUncheckedUpdateManyInput>
    /**
     * Filter which FacilityToCoWorks to update
     */
    where?: FacilityToCoWorkWhereInput
  }


  /**
   * FacilityToCoWork upsert
   */
  export type FacilityToCoWorkUpsertArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * The filter to search for the FacilityToCoWork to update in case it exists.
     */
    where: FacilityToCoWorkWhereUniqueInput
    /**
     * In case the FacilityToCoWork found by the `where` argument doesn't exist, create a new FacilityToCoWork with this data.
     */
    create: XOR<FacilityToCoWorkCreateInput, FacilityToCoWorkUncheckedCreateInput>
    /**
     * In case the FacilityToCoWork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityToCoWorkUpdateInput, FacilityToCoWorkUncheckedUpdateInput>
  }


  /**
   * FacilityToCoWork delete
   */
  export type FacilityToCoWorkDeleteArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
    /**
     * Filter which FacilityToCoWork to delete.
     */
    where: FacilityToCoWorkWhereUniqueInput
  }


  /**
   * FacilityToCoWork deleteMany
   */
  export type FacilityToCoWorkDeleteManyArgs = {
    /**
     * Filter which FacilityToCoWorks to delete
     */
    where?: FacilityToCoWorkWhereInput
  }


  /**
   * FacilityToCoWork without action
   */
  export type FacilityToCoWorkArgs = {
    /**
     * Select specific fields to fetch from the FacilityToCoWork
     */
    select?: FacilityToCoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToCoWorkInclude | null
  }



  /**
   * Model BranchToRoom
   */


  export type AggregateBranchToRoom = {
    _count: BranchToRoomCountAggregateOutputType | null
    _avg: BranchToRoomAvgAggregateOutputType | null
    _sum: BranchToRoomSumAggregateOutputType | null
    _min: BranchToRoomMinAggregateOutputType | null
    _max: BranchToRoomMaxAggregateOutputType | null
  }

  export type BranchToRoomAvgAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    roomId: number | null
  }

  export type BranchToRoomSumAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    roomId: number | null
  }

  export type BranchToRoomMinAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    roomId: number | null
    createAt: Date | null
    updateAt: Date | null
    active: boolean | null
  }

  export type BranchToRoomMaxAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    roomId: number | null
    createAt: Date | null
    updateAt: Date | null
    active: boolean | null
  }

  export type BranchToRoomCountAggregateOutputType = {
    id: number
    coWorkId: number
    roomId: number
    createAt: number
    updateAt: number
    active: number
    _all: number
  }


  export type BranchToRoomAvgAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
  }

  export type BranchToRoomSumAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
  }

  export type BranchToRoomMinAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
    createAt?: true
    updateAt?: true
    active?: true
  }

  export type BranchToRoomMaxAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
    createAt?: true
    updateAt?: true
    active?: true
  }

  export type BranchToRoomCountAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
    createAt?: true
    updateAt?: true
    active?: true
    _all?: true
  }

  export type BranchToRoomAggregateArgs = {
    /**
     * Filter which BranchToRoom to aggregate.
     */
    where?: BranchToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchToRooms to fetch.
     */
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BranchToRooms
    **/
    _count?: true | BranchToRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchToRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchToRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchToRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchToRoomMaxAggregateInputType
  }

  export type GetBranchToRoomAggregateType<T extends BranchToRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateBranchToRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranchToRoom[P]>
      : GetScalarType<T[P], AggregateBranchToRoom[P]>
  }




  export type BranchToRoomGroupByArgs = {
    where?: BranchToRoomWhereInput
    orderBy?: Enumerable<BranchToRoomOrderByWithAggregationInput>
    by: BranchToRoomScalarFieldEnum[]
    having?: BranchToRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchToRoomCountAggregateInputType | true
    _avg?: BranchToRoomAvgAggregateInputType
    _sum?: BranchToRoomSumAggregateInputType
    _min?: BranchToRoomMinAggregateInputType
    _max?: BranchToRoomMaxAggregateInputType
  }


  export type BranchToRoomGroupByOutputType = {
    id: number
    coWorkId: number
    roomId: number
    createAt: Date
    updateAt: Date
    active: boolean | null
    _count: BranchToRoomCountAggregateOutputType | null
    _avg: BranchToRoomAvgAggregateOutputType | null
    _sum: BranchToRoomSumAggregateOutputType | null
    _min: BranchToRoomMinAggregateOutputType | null
    _max: BranchToRoomMaxAggregateOutputType | null
  }

  type GetBranchToRoomGroupByPayload<T extends BranchToRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BranchToRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchToRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchToRoomGroupByOutputType[P]>
            : GetScalarType<T[P], BranchToRoomGroupByOutputType[P]>
        }
      >
    >


  export type BranchToRoomSelect = {
    id?: boolean
    coWorkId?: boolean
    roomId?: boolean
    createAt?: boolean
    updateAt?: boolean
    active?: boolean
    coWork?: boolean | CoWorkArgs
    room?: boolean | RoomArgs
  }


  export type BranchToRoomInclude = {
    coWork?: boolean | CoWorkArgs
    room?: boolean | RoomArgs
  }

  export type BranchToRoomGetPayload<S extends boolean | null | undefined | BranchToRoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BranchToRoom :
    S extends undefined ? never :
    S extends { include: any } & (BranchToRoomArgs | BranchToRoomFindManyArgs)
    ? BranchToRoom  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['include'][P]> :
        P extends 'room' ? RoomGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BranchToRoomArgs | BranchToRoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['select'][P]> :
        P extends 'room' ? RoomGetPayload<S['select'][P]> :  P extends keyof BranchToRoom ? BranchToRoom[P] : never
  } 
      : BranchToRoom


  type BranchToRoomCountArgs = 
    Omit<BranchToRoomFindManyArgs, 'select' | 'include'> & {
      select?: BranchToRoomCountAggregateInputType | true
    }

  export interface BranchToRoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BranchToRoom that matches the filter.
     * @param {BranchToRoomFindUniqueArgs} args - Arguments to find a BranchToRoom
     * @example
     * // Get one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BranchToRoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BranchToRoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BranchToRoom'> extends True ? Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>> : Prisma__BranchToRoomClient<BranchToRoomGetPayload<T> | null, null>

    /**
     * Find one BranchToRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BranchToRoomFindUniqueOrThrowArgs} args - Arguments to find a BranchToRoom
     * @example
     * // Get one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BranchToRoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BranchToRoomFindUniqueOrThrowArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Find the first BranchToRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomFindFirstArgs} args - Arguments to find a BranchToRoom
     * @example
     * // Get one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BranchToRoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BranchToRoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BranchToRoom'> extends True ? Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>> : Prisma__BranchToRoomClient<BranchToRoomGetPayload<T> | null, null>

    /**
     * Find the first BranchToRoom that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomFindFirstOrThrowArgs} args - Arguments to find a BranchToRoom
     * @example
     * // Get one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BranchToRoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BranchToRoomFindFirstOrThrowArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Find zero or more BranchToRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BranchToRooms
     * const branchToRooms = await prisma.branchToRoom.findMany()
     * 
     * // Get first 10 BranchToRooms
     * const branchToRooms = await prisma.branchToRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchToRoomWithIdOnly = await prisma.branchToRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BranchToRoomFindManyArgs>(
      args?: SelectSubset<T, BranchToRoomFindManyArgs>
    ): Prisma.PrismaPromise<Array<BranchToRoomGetPayload<T>>>

    /**
     * Create a BranchToRoom.
     * @param {BranchToRoomCreateArgs} args - Arguments to create a BranchToRoom.
     * @example
     * // Create one BranchToRoom
     * const BranchToRoom = await prisma.branchToRoom.create({
     *   data: {
     *     // ... data to create a BranchToRoom
     *   }
     * })
     * 
    **/
    create<T extends BranchToRoomCreateArgs>(
      args: SelectSubset<T, BranchToRoomCreateArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Create many BranchToRooms.
     *     @param {BranchToRoomCreateManyArgs} args - Arguments to create many BranchToRooms.
     *     @example
     *     // Create many BranchToRooms
     *     const branchToRoom = await prisma.branchToRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BranchToRoomCreateManyArgs>(
      args?: SelectSubset<T, BranchToRoomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BranchToRoom.
     * @param {BranchToRoomDeleteArgs} args - Arguments to delete one BranchToRoom.
     * @example
     * // Delete one BranchToRoom
     * const BranchToRoom = await prisma.branchToRoom.delete({
     *   where: {
     *     // ... filter to delete one BranchToRoom
     *   }
     * })
     * 
    **/
    delete<T extends BranchToRoomDeleteArgs>(
      args: SelectSubset<T, BranchToRoomDeleteArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Update one BranchToRoom.
     * @param {BranchToRoomUpdateArgs} args - Arguments to update one BranchToRoom.
     * @example
     * // Update one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BranchToRoomUpdateArgs>(
      args: SelectSubset<T, BranchToRoomUpdateArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Delete zero or more BranchToRooms.
     * @param {BranchToRoomDeleteManyArgs} args - Arguments to filter BranchToRooms to delete.
     * @example
     * // Delete a few BranchToRooms
     * const { count } = await prisma.branchToRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BranchToRoomDeleteManyArgs>(
      args?: SelectSubset<T, BranchToRoomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BranchToRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BranchToRooms
     * const branchToRoom = await prisma.branchToRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BranchToRoomUpdateManyArgs>(
      args: SelectSubset<T, BranchToRoomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BranchToRoom.
     * @param {BranchToRoomUpsertArgs} args - Arguments to update or create a BranchToRoom.
     * @example
     * // Update or create a BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.upsert({
     *   create: {
     *     // ... data to create a BranchToRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BranchToRoom we want to update
     *   }
     * })
    **/
    upsert<T extends BranchToRoomUpsertArgs>(
      args: SelectSubset<T, BranchToRoomUpsertArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Count the number of BranchToRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomCountArgs} args - Arguments to filter BranchToRooms to count.
     * @example
     * // Count the number of BranchToRooms
     * const count = await prisma.branchToRoom.count({
     *   where: {
     *     // ... the filter for the BranchToRooms we want to count
     *   }
     * })
    **/
    count<T extends BranchToRoomCountArgs>(
      args?: Subset<T, BranchToRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchToRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BranchToRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchToRoomAggregateArgs>(args: Subset<T, BranchToRoomAggregateArgs>): Prisma.PrismaPromise<GetBranchToRoomAggregateType<T>>

    /**
     * Group by BranchToRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchToRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchToRoomGroupByArgs['orderBy'] }
        : { orderBy?: BranchToRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchToRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchToRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BranchToRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BranchToRoomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    coWork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BranchToRoom base type for findUnique actions
   */
  export type BranchToRoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRoom to fetch.
     */
    where: BranchToRoomWhereUniqueInput
  }

  /**
   * BranchToRoom findUnique
   */
  export interface BranchToRoomFindUniqueArgs extends BranchToRoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BranchToRoom findUniqueOrThrow
   */
  export type BranchToRoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRoom to fetch.
     */
    where: BranchToRoomWhereUniqueInput
  }


  /**
   * BranchToRoom base type for findFirst actions
   */
  export type BranchToRoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRoom to fetch.
     */
    where?: BranchToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchToRooms to fetch.
     */
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchToRooms.
     */
    cursor?: BranchToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchToRooms.
     */
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }

  /**
   * BranchToRoom findFirst
   */
  export interface BranchToRoomFindFirstArgs extends BranchToRoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BranchToRoom findFirstOrThrow
   */
  export type BranchToRoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRoom to fetch.
     */
    where?: BranchToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchToRooms to fetch.
     */
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchToRooms.
     */
    cursor?: BranchToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchToRooms.
     */
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }


  /**
   * BranchToRoom findMany
   */
  export type BranchToRoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRooms to fetch.
     */
    where?: BranchToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchToRooms to fetch.
     */
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BranchToRooms.
     */
    cursor?: BranchToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchToRooms.
     */
    skip?: number
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }


  /**
   * BranchToRoom create
   */
  export type BranchToRoomCreateArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * The data needed to create a BranchToRoom.
     */
    data: XOR<BranchToRoomCreateInput, BranchToRoomUncheckedCreateInput>
  }


  /**
   * BranchToRoom createMany
   */
  export type BranchToRoomCreateManyArgs = {
    /**
     * The data used to create many BranchToRooms.
     */
    data: Enumerable<BranchToRoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BranchToRoom update
   */
  export type BranchToRoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * The data needed to update a BranchToRoom.
     */
    data: XOR<BranchToRoomUpdateInput, BranchToRoomUncheckedUpdateInput>
    /**
     * Choose, which BranchToRoom to update.
     */
    where: BranchToRoomWhereUniqueInput
  }


  /**
   * BranchToRoom updateMany
   */
  export type BranchToRoomUpdateManyArgs = {
    /**
     * The data used to update BranchToRooms.
     */
    data: XOR<BranchToRoomUpdateManyMutationInput, BranchToRoomUncheckedUpdateManyInput>
    /**
     * Filter which BranchToRooms to update
     */
    where?: BranchToRoomWhereInput
  }


  /**
   * BranchToRoom upsert
   */
  export type BranchToRoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * The filter to search for the BranchToRoom to update in case it exists.
     */
    where: BranchToRoomWhereUniqueInput
    /**
     * In case the BranchToRoom found by the `where` argument doesn't exist, create a new BranchToRoom with this data.
     */
    create: XOR<BranchToRoomCreateInput, BranchToRoomUncheckedCreateInput>
    /**
     * In case the BranchToRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchToRoomUpdateInput, BranchToRoomUncheckedUpdateInput>
  }


  /**
   * BranchToRoom delete
   */
  export type BranchToRoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter which BranchToRoom to delete.
     */
    where: BranchToRoomWhereUniqueInput
  }


  /**
   * BranchToRoom deleteMany
   */
  export type BranchToRoomDeleteManyArgs = {
    /**
     * Filter which BranchToRooms to delete
     */
    where?: BranchToRoomWhereInput
  }


  /**
   * BranchToRoom without action
   */
  export type BranchToRoomArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
  }



  /**
   * Model BookRoom
   */


  export type AggregateBookRoom = {
    _count: BookRoomCountAggregateOutputType | null
    _avg: BookRoomAvgAggregateOutputType | null
    _sum: BookRoomSumAggregateOutputType | null
    _min: BookRoomMinAggregateOutputType | null
    _max: BookRoomMaxAggregateOutputType | null
  }

  export type BookRoomAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    roomRateId: number | null
    userExternalId: number | null
    vertifyBookingCodeId: number | null
    price: number | null
  }

  export type BookRoomSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    roomRateId: number | null
    userExternalId: number | null
    vertifyBookingCodeId: number | null
    price: number | null
  }

  export type BookRoomMinAggregateOutputType = {
    id: number | null
    startTime: Date | null
    roomId: number | null
    roomRateId: number | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
    userExternalId: number | null
    vertifyBookingCodeId: number | null
    price: number | null
  }

  export type BookRoomMaxAggregateOutputType = {
    id: number | null
    startTime: Date | null
    roomId: number | null
    roomRateId: number | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
    userExternalId: number | null
    vertifyBookingCodeId: number | null
    price: number | null
  }

  export type BookRoomCountAggregateOutputType = {
    id: number
    startTime: number
    roomId: number
    roomRateId: number
    status: number
    createAt: number
    updateAt: number
    userExternalId: number
    vertifyBookingCodeId: number
    price: number
    _all: number
  }


  export type BookRoomAvgAggregateInputType = {
    id?: true
    roomId?: true
    roomRateId?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
    price?: true
  }

  export type BookRoomSumAggregateInputType = {
    id?: true
    roomId?: true
    roomRateId?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
    price?: true
  }

  export type BookRoomMinAggregateInputType = {
    id?: true
    startTime?: true
    roomId?: true
    roomRateId?: true
    status?: true
    createAt?: true
    updateAt?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
    price?: true
  }

  export type BookRoomMaxAggregateInputType = {
    id?: true
    startTime?: true
    roomId?: true
    roomRateId?: true
    status?: true
    createAt?: true
    updateAt?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
    price?: true
  }

  export type BookRoomCountAggregateInputType = {
    id?: true
    startTime?: true
    roomId?: true
    roomRateId?: true
    status?: true
    createAt?: true
    updateAt?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
    price?: true
    _all?: true
  }

  export type BookRoomAggregateArgs = {
    /**
     * Filter which BookRoom to aggregate.
     */
    where?: BookRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRooms to fetch.
     */
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookRooms
    **/
    _count?: true | BookRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookRoomMaxAggregateInputType
  }

  export type GetBookRoomAggregateType<T extends BookRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateBookRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookRoom[P]>
      : GetScalarType<T[P], AggregateBookRoom[P]>
  }




  export type BookRoomGroupByArgs = {
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithAggregationInput>
    by: BookRoomScalarFieldEnum[]
    having?: BookRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookRoomCountAggregateInputType | true
    _avg?: BookRoomAvgAggregateInputType
    _sum?: BookRoomSumAggregateInputType
    _min?: BookRoomMinAggregateInputType
    _max?: BookRoomMaxAggregateInputType
  }


  export type BookRoomGroupByOutputType = {
    id: number
    startTime: Date
    roomId: number | null
    roomRateId: number
    status: string
    createAt: Date
    updateAt: Date
    userExternalId: number
    vertifyBookingCodeId: number
    price: number | null
    _count: BookRoomCountAggregateOutputType | null
    _avg: BookRoomAvgAggregateOutputType | null
    _sum: BookRoomSumAggregateOutputType | null
    _min: BookRoomMinAggregateOutputType | null
    _max: BookRoomMaxAggregateOutputType | null
  }

  type GetBookRoomGroupByPayload<T extends BookRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BookRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookRoomGroupByOutputType[P]>
            : GetScalarType<T[P], BookRoomGroupByOutputType[P]>
        }
      >
    >


  export type BookRoomSelect = {
    id?: boolean
    startTime?: boolean
    roomId?: boolean
    roomRateId?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    userExternalId?: boolean
    vertifyBookingCodeId?: boolean
    price?: boolean
    room?: boolean | RoomArgs
    roomRate?: boolean | RoomRateArgs
    UserExternal?: boolean | UserExternalArgs
    vertifyCode?: boolean | VertifyBookingCodeArgs
  }


  export type BookRoomInclude = {
    room?: boolean | RoomArgs
    roomRate?: boolean | RoomRateArgs
    UserExternal?: boolean | UserExternalArgs
    vertifyCode?: boolean | VertifyBookingCodeArgs
  }

  export type BookRoomGetPayload<S extends boolean | null | undefined | BookRoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BookRoom :
    S extends undefined ? never :
    S extends { include: any } & (BookRoomArgs | BookRoomFindManyArgs)
    ? BookRoom  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? RoomGetPayload<S['include'][P]> | null :
        P extends 'roomRate' ? RoomRateGetPayload<S['include'][P]> :
        P extends 'UserExternal' ? UserExternalGetPayload<S['include'][P]> :
        P extends 'vertifyCode' ? VertifyBookingCodeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BookRoomArgs | BookRoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? RoomGetPayload<S['select'][P]> | null :
        P extends 'roomRate' ? RoomRateGetPayload<S['select'][P]> :
        P extends 'UserExternal' ? UserExternalGetPayload<S['select'][P]> :
        P extends 'vertifyCode' ? VertifyBookingCodeGetPayload<S['select'][P]> :  P extends keyof BookRoom ? BookRoom[P] : never
  } 
      : BookRoom


  type BookRoomCountArgs = 
    Omit<BookRoomFindManyArgs, 'select' | 'include'> & {
      select?: BookRoomCountAggregateInputType | true
    }

  export interface BookRoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BookRoom that matches the filter.
     * @param {BookRoomFindUniqueArgs} args - Arguments to find a BookRoom
     * @example
     * // Get one BookRoom
     * const bookRoom = await prisma.bookRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookRoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookRoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BookRoom'> extends True ? Prisma__BookRoomClient<BookRoomGetPayload<T>> : Prisma__BookRoomClient<BookRoomGetPayload<T> | null, null>

    /**
     * Find one BookRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookRoomFindUniqueOrThrowArgs} args - Arguments to find a BookRoom
     * @example
     * // Get one BookRoom
     * const bookRoom = await prisma.bookRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookRoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BookRoomFindUniqueOrThrowArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Find the first BookRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomFindFirstArgs} args - Arguments to find a BookRoom
     * @example
     * // Get one BookRoom
     * const bookRoom = await prisma.bookRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookRoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookRoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BookRoom'> extends True ? Prisma__BookRoomClient<BookRoomGetPayload<T>> : Prisma__BookRoomClient<BookRoomGetPayload<T> | null, null>

    /**
     * Find the first BookRoom that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomFindFirstOrThrowArgs} args - Arguments to find a BookRoom
     * @example
     * // Get one BookRoom
     * const bookRoom = await prisma.bookRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookRoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookRoomFindFirstOrThrowArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Find zero or more BookRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookRooms
     * const bookRooms = await prisma.bookRoom.findMany()
     * 
     * // Get first 10 BookRooms
     * const bookRooms = await prisma.bookRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookRoomWithIdOnly = await prisma.bookRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookRoomFindManyArgs>(
      args?: SelectSubset<T, BookRoomFindManyArgs>
    ): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>>

    /**
     * Create a BookRoom.
     * @param {BookRoomCreateArgs} args - Arguments to create a BookRoom.
     * @example
     * // Create one BookRoom
     * const BookRoom = await prisma.bookRoom.create({
     *   data: {
     *     // ... data to create a BookRoom
     *   }
     * })
     * 
    **/
    create<T extends BookRoomCreateArgs>(
      args: SelectSubset<T, BookRoomCreateArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Create many BookRooms.
     *     @param {BookRoomCreateManyArgs} args - Arguments to create many BookRooms.
     *     @example
     *     // Create many BookRooms
     *     const bookRoom = await prisma.bookRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookRoomCreateManyArgs>(
      args?: SelectSubset<T, BookRoomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookRoom.
     * @param {BookRoomDeleteArgs} args - Arguments to delete one BookRoom.
     * @example
     * // Delete one BookRoom
     * const BookRoom = await prisma.bookRoom.delete({
     *   where: {
     *     // ... filter to delete one BookRoom
     *   }
     * })
     * 
    **/
    delete<T extends BookRoomDeleteArgs>(
      args: SelectSubset<T, BookRoomDeleteArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Update one BookRoom.
     * @param {BookRoomUpdateArgs} args - Arguments to update one BookRoom.
     * @example
     * // Update one BookRoom
     * const bookRoom = await prisma.bookRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookRoomUpdateArgs>(
      args: SelectSubset<T, BookRoomUpdateArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Delete zero or more BookRooms.
     * @param {BookRoomDeleteManyArgs} args - Arguments to filter BookRooms to delete.
     * @example
     * // Delete a few BookRooms
     * const { count } = await prisma.bookRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookRoomDeleteManyArgs>(
      args?: SelectSubset<T, BookRoomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookRooms
     * const bookRoom = await prisma.bookRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookRoomUpdateManyArgs>(
      args: SelectSubset<T, BookRoomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookRoom.
     * @param {BookRoomUpsertArgs} args - Arguments to update or create a BookRoom.
     * @example
     * // Update or create a BookRoom
     * const bookRoom = await prisma.bookRoom.upsert({
     *   create: {
     *     // ... data to create a BookRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookRoom we want to update
     *   }
     * })
    **/
    upsert<T extends BookRoomUpsertArgs>(
      args: SelectSubset<T, BookRoomUpsertArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Count the number of BookRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomCountArgs} args - Arguments to filter BookRooms to count.
     * @example
     * // Count the number of BookRooms
     * const count = await prisma.bookRoom.count({
     *   where: {
     *     // ... the filter for the BookRooms we want to count
     *   }
     * })
    **/
    count<T extends BookRoomCountArgs>(
      args?: Subset<T, BookRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookRoomAggregateArgs>(args: Subset<T, BookRoomAggregateArgs>): Prisma.PrismaPromise<GetBookRoomAggregateType<T>>

    /**
     * Group by BookRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookRoomGroupByArgs['orderBy'] }
        : { orderBy?: BookRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BookRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookRoomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    roomRate<T extends RoomRateArgs= {}>(args?: Subset<T, RoomRateArgs>): Prisma__RoomRateClient<RoomRateGetPayload<T> | Null>;

    UserExternal<T extends UserExternalArgs= {}>(args?: Subset<T, UserExternalArgs>): Prisma__UserExternalClient<UserExternalGetPayload<T> | Null>;

    vertifyCode<T extends VertifyBookingCodeArgs= {}>(args?: Subset<T, VertifyBookingCodeArgs>): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BookRoom base type for findUnique actions
   */
  export type BookRoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRoom to fetch.
     */
    where: BookRoomWhereUniqueInput
  }

  /**
   * BookRoom findUnique
   */
  export interface BookRoomFindUniqueArgs extends BookRoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BookRoom findUniqueOrThrow
   */
  export type BookRoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRoom to fetch.
     */
    where: BookRoomWhereUniqueInput
  }


  /**
   * BookRoom base type for findFirst actions
   */
  export type BookRoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRoom to fetch.
     */
    where?: BookRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRooms to fetch.
     */
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookRooms.
     */
    cursor?: BookRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookRooms.
     */
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }

  /**
   * BookRoom findFirst
   */
  export interface BookRoomFindFirstArgs extends BookRoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BookRoom findFirstOrThrow
   */
  export type BookRoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRoom to fetch.
     */
    where?: BookRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRooms to fetch.
     */
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookRooms.
     */
    cursor?: BookRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookRooms.
     */
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * BookRoom findMany
   */
  export type BookRoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRooms to fetch.
     */
    where?: BookRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRooms to fetch.
     */
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookRooms.
     */
    cursor?: BookRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRooms.
     */
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * BookRoom create
   */
  export type BookRoomCreateArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * The data needed to create a BookRoom.
     */
    data: XOR<BookRoomCreateInput, BookRoomUncheckedCreateInput>
  }


  /**
   * BookRoom createMany
   */
  export type BookRoomCreateManyArgs = {
    /**
     * The data used to create many BookRooms.
     */
    data: Enumerable<BookRoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BookRoom update
   */
  export type BookRoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * The data needed to update a BookRoom.
     */
    data: XOR<BookRoomUpdateInput, BookRoomUncheckedUpdateInput>
    /**
     * Choose, which BookRoom to update.
     */
    where: BookRoomWhereUniqueInput
  }


  /**
   * BookRoom updateMany
   */
  export type BookRoomUpdateManyArgs = {
    /**
     * The data used to update BookRooms.
     */
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyInput>
    /**
     * Filter which BookRooms to update
     */
    where?: BookRoomWhereInput
  }


  /**
   * BookRoom upsert
   */
  export type BookRoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * The filter to search for the BookRoom to update in case it exists.
     */
    where: BookRoomWhereUniqueInput
    /**
     * In case the BookRoom found by the `where` argument doesn't exist, create a new BookRoom with this data.
     */
    create: XOR<BookRoomCreateInput, BookRoomUncheckedCreateInput>
    /**
     * In case the BookRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookRoomUpdateInput, BookRoomUncheckedUpdateInput>
  }


  /**
   * BookRoom delete
   */
  export type BookRoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter which BookRoom to delete.
     */
    where: BookRoomWhereUniqueInput
  }


  /**
   * BookRoom deleteMany
   */
  export type BookRoomDeleteManyArgs = {
    /**
     * Filter which BookRooms to delete
     */
    where?: BookRoomWhereInput
  }


  /**
   * BookRoom without action
   */
  export type BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
  }



  /**
   * Model VertifyBookingCode
   */


  export type AggregateVertifyBookingCode = {
    _count: VertifyBookingCodeCountAggregateOutputType | null
    _avg: VertifyBookingCodeAvgAggregateOutputType | null
    _sum: VertifyBookingCodeSumAggregateOutputType | null
    _min: VertifyBookingCodeMinAggregateOutputType | null
    _max: VertifyBookingCodeMaxAggregateOutputType | null
  }

  export type VertifyBookingCodeAvgAggregateOutputType = {
    id: number | null
  }

  export type VertifyBookingCodeSumAggregateOutputType = {
    id: number | null
  }

  export type VertifyBookingCodeMinAggregateOutputType = {
    id: number | null
    verifyCode: string | null
    bookdate: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type VertifyBookingCodeMaxAggregateOutputType = {
    id: number | null
    verifyCode: string | null
    bookdate: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type VertifyBookingCodeCountAggregateOutputType = {
    id: number
    verifyCode: number
    bookdate: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type VertifyBookingCodeAvgAggregateInputType = {
    id?: true
  }

  export type VertifyBookingCodeSumAggregateInputType = {
    id?: true
  }

  export type VertifyBookingCodeMinAggregateInputType = {
    id?: true
    verifyCode?: true
    bookdate?: true
    createAt?: true
    updateAt?: true
  }

  export type VertifyBookingCodeMaxAggregateInputType = {
    id?: true
    verifyCode?: true
    bookdate?: true
    createAt?: true
    updateAt?: true
  }

  export type VertifyBookingCodeCountAggregateInputType = {
    id?: true
    verifyCode?: true
    bookdate?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type VertifyBookingCodeAggregateArgs = {
    /**
     * Filter which VertifyBookingCode to aggregate.
     */
    where?: VertifyBookingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VertifyBookingCodes to fetch.
     */
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VertifyBookingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VertifyBookingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VertifyBookingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VertifyBookingCodes
    **/
    _count?: true | VertifyBookingCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VertifyBookingCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VertifyBookingCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VertifyBookingCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VertifyBookingCodeMaxAggregateInputType
  }

  export type GetVertifyBookingCodeAggregateType<T extends VertifyBookingCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVertifyBookingCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVertifyBookingCode[P]>
      : GetScalarType<T[P], AggregateVertifyBookingCode[P]>
  }




  export type VertifyBookingCodeGroupByArgs = {
    where?: VertifyBookingCodeWhereInput
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithAggregationInput>
    by: VertifyBookingCodeScalarFieldEnum[]
    having?: VertifyBookingCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VertifyBookingCodeCountAggregateInputType | true
    _avg?: VertifyBookingCodeAvgAggregateInputType
    _sum?: VertifyBookingCodeSumAggregateInputType
    _min?: VertifyBookingCodeMinAggregateInputType
    _max?: VertifyBookingCodeMaxAggregateInputType
  }


  export type VertifyBookingCodeGroupByOutputType = {
    id: number
    verifyCode: string
    bookdate: Date
    createAt: Date
    updateAt: Date
    _count: VertifyBookingCodeCountAggregateOutputType | null
    _avg: VertifyBookingCodeAvgAggregateOutputType | null
    _sum: VertifyBookingCodeSumAggregateOutputType | null
    _min: VertifyBookingCodeMinAggregateOutputType | null
    _max: VertifyBookingCodeMaxAggregateOutputType | null
  }

  type GetVertifyBookingCodeGroupByPayload<T extends VertifyBookingCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VertifyBookingCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VertifyBookingCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VertifyBookingCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VertifyBookingCodeGroupByOutputType[P]>
        }
      >
    >


  export type VertifyBookingCodeSelect = {
    id?: boolean
    verifyCode?: boolean
    bookdate?: boolean
    createAt?: boolean
    updateAt?: boolean
    bookRoom?: boolean | VertifyBookingCode$bookRoomArgs
    _count?: boolean | VertifyBookingCodeCountOutputTypeArgs
  }


  export type VertifyBookingCodeInclude = {
    bookRoom?: boolean | VertifyBookingCode$bookRoomArgs
    _count?: boolean | VertifyBookingCodeCountOutputTypeArgs
  }

  export type VertifyBookingCodeGetPayload<S extends boolean | null | undefined | VertifyBookingCodeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VertifyBookingCode :
    S extends undefined ? never :
    S extends { include: any } & (VertifyBookingCodeArgs | VertifyBookingCodeFindManyArgs)
    ? VertifyBookingCode  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'bookRoom' ? Array < BookRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? VertifyBookingCodeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VertifyBookingCodeArgs | VertifyBookingCodeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'bookRoom' ? Array < BookRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? VertifyBookingCodeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof VertifyBookingCode ? VertifyBookingCode[P] : never
  } 
      : VertifyBookingCode


  type VertifyBookingCodeCountArgs = 
    Omit<VertifyBookingCodeFindManyArgs, 'select' | 'include'> & {
      select?: VertifyBookingCodeCountAggregateInputType | true
    }

  export interface VertifyBookingCodeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VertifyBookingCode that matches the filter.
     * @param {VertifyBookingCodeFindUniqueArgs} args - Arguments to find a VertifyBookingCode
     * @example
     * // Get one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VertifyBookingCodeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VertifyBookingCodeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VertifyBookingCode'> extends True ? Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>> : Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T> | null, null>

    /**
     * Find one VertifyBookingCode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VertifyBookingCodeFindUniqueOrThrowArgs} args - Arguments to find a VertifyBookingCode
     * @example
     * // Get one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VertifyBookingCodeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VertifyBookingCodeFindUniqueOrThrowArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Find the first VertifyBookingCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeFindFirstArgs} args - Arguments to find a VertifyBookingCode
     * @example
     * // Get one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VertifyBookingCodeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VertifyBookingCodeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VertifyBookingCode'> extends True ? Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>> : Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T> | null, null>

    /**
     * Find the first VertifyBookingCode that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeFindFirstOrThrowArgs} args - Arguments to find a VertifyBookingCode
     * @example
     * // Get one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VertifyBookingCodeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VertifyBookingCodeFindFirstOrThrowArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Find zero or more VertifyBookingCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VertifyBookingCodes
     * const vertifyBookingCodes = await prisma.vertifyBookingCode.findMany()
     * 
     * // Get first 10 VertifyBookingCodes
     * const vertifyBookingCodes = await prisma.vertifyBookingCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vertifyBookingCodeWithIdOnly = await prisma.vertifyBookingCode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VertifyBookingCodeFindManyArgs>(
      args?: SelectSubset<T, VertifyBookingCodeFindManyArgs>
    ): Prisma.PrismaPromise<Array<VertifyBookingCodeGetPayload<T>>>

    /**
     * Create a VertifyBookingCode.
     * @param {VertifyBookingCodeCreateArgs} args - Arguments to create a VertifyBookingCode.
     * @example
     * // Create one VertifyBookingCode
     * const VertifyBookingCode = await prisma.vertifyBookingCode.create({
     *   data: {
     *     // ... data to create a VertifyBookingCode
     *   }
     * })
     * 
    **/
    create<T extends VertifyBookingCodeCreateArgs>(
      args: SelectSubset<T, VertifyBookingCodeCreateArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Create many VertifyBookingCodes.
     *     @param {VertifyBookingCodeCreateManyArgs} args - Arguments to create many VertifyBookingCodes.
     *     @example
     *     // Create many VertifyBookingCodes
     *     const vertifyBookingCode = await prisma.vertifyBookingCode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VertifyBookingCodeCreateManyArgs>(
      args?: SelectSubset<T, VertifyBookingCodeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VertifyBookingCode.
     * @param {VertifyBookingCodeDeleteArgs} args - Arguments to delete one VertifyBookingCode.
     * @example
     * // Delete one VertifyBookingCode
     * const VertifyBookingCode = await prisma.vertifyBookingCode.delete({
     *   where: {
     *     // ... filter to delete one VertifyBookingCode
     *   }
     * })
     * 
    **/
    delete<T extends VertifyBookingCodeDeleteArgs>(
      args: SelectSubset<T, VertifyBookingCodeDeleteArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Update one VertifyBookingCode.
     * @param {VertifyBookingCodeUpdateArgs} args - Arguments to update one VertifyBookingCode.
     * @example
     * // Update one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VertifyBookingCodeUpdateArgs>(
      args: SelectSubset<T, VertifyBookingCodeUpdateArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Delete zero or more VertifyBookingCodes.
     * @param {VertifyBookingCodeDeleteManyArgs} args - Arguments to filter VertifyBookingCodes to delete.
     * @example
     * // Delete a few VertifyBookingCodes
     * const { count } = await prisma.vertifyBookingCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VertifyBookingCodeDeleteManyArgs>(
      args?: SelectSubset<T, VertifyBookingCodeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VertifyBookingCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VertifyBookingCodes
     * const vertifyBookingCode = await prisma.vertifyBookingCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VertifyBookingCodeUpdateManyArgs>(
      args: SelectSubset<T, VertifyBookingCodeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VertifyBookingCode.
     * @param {VertifyBookingCodeUpsertArgs} args - Arguments to update or create a VertifyBookingCode.
     * @example
     * // Update or create a VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.upsert({
     *   create: {
     *     // ... data to create a VertifyBookingCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VertifyBookingCode we want to update
     *   }
     * })
    **/
    upsert<T extends VertifyBookingCodeUpsertArgs>(
      args: SelectSubset<T, VertifyBookingCodeUpsertArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Count the number of VertifyBookingCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeCountArgs} args - Arguments to filter VertifyBookingCodes to count.
     * @example
     * // Count the number of VertifyBookingCodes
     * const count = await prisma.vertifyBookingCode.count({
     *   where: {
     *     // ... the filter for the VertifyBookingCodes we want to count
     *   }
     * })
    **/
    count<T extends VertifyBookingCodeCountArgs>(
      args?: Subset<T, VertifyBookingCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VertifyBookingCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VertifyBookingCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VertifyBookingCodeAggregateArgs>(args: Subset<T, VertifyBookingCodeAggregateArgs>): Prisma.PrismaPromise<GetVertifyBookingCodeAggregateType<T>>

    /**
     * Group by VertifyBookingCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VertifyBookingCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VertifyBookingCodeGroupByArgs['orderBy'] }
        : { orderBy?: VertifyBookingCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VertifyBookingCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVertifyBookingCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VertifyBookingCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VertifyBookingCodeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    bookRoom<T extends VertifyBookingCode$bookRoomArgs= {}>(args?: Subset<T, VertifyBookingCode$bookRoomArgs>): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VertifyBookingCode base type for findUnique actions
   */
  export type VertifyBookingCodeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCode to fetch.
     */
    where: VertifyBookingCodeWhereUniqueInput
  }

  /**
   * VertifyBookingCode findUnique
   */
  export interface VertifyBookingCodeFindUniqueArgs extends VertifyBookingCodeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VertifyBookingCode findUniqueOrThrow
   */
  export type VertifyBookingCodeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCode to fetch.
     */
    where: VertifyBookingCodeWhereUniqueInput
  }


  /**
   * VertifyBookingCode base type for findFirst actions
   */
  export type VertifyBookingCodeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCode to fetch.
     */
    where?: VertifyBookingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VertifyBookingCodes to fetch.
     */
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VertifyBookingCodes.
     */
    cursor?: VertifyBookingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VertifyBookingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VertifyBookingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VertifyBookingCodes.
     */
    distinct?: Enumerable<VertifyBookingCodeScalarFieldEnum>
  }

  /**
   * VertifyBookingCode findFirst
   */
  export interface VertifyBookingCodeFindFirstArgs extends VertifyBookingCodeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VertifyBookingCode findFirstOrThrow
   */
  export type VertifyBookingCodeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCode to fetch.
     */
    where?: VertifyBookingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VertifyBookingCodes to fetch.
     */
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VertifyBookingCodes.
     */
    cursor?: VertifyBookingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VertifyBookingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VertifyBookingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VertifyBookingCodes.
     */
    distinct?: Enumerable<VertifyBookingCodeScalarFieldEnum>
  }


  /**
   * VertifyBookingCode findMany
   */
  export type VertifyBookingCodeFindManyArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCodes to fetch.
     */
    where?: VertifyBookingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VertifyBookingCodes to fetch.
     */
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VertifyBookingCodes.
     */
    cursor?: VertifyBookingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VertifyBookingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VertifyBookingCodes.
     */
    skip?: number
    distinct?: Enumerable<VertifyBookingCodeScalarFieldEnum>
  }


  /**
   * VertifyBookingCode create
   */
  export type VertifyBookingCodeCreateArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * The data needed to create a VertifyBookingCode.
     */
    data: XOR<VertifyBookingCodeCreateInput, VertifyBookingCodeUncheckedCreateInput>
  }


  /**
   * VertifyBookingCode createMany
   */
  export type VertifyBookingCodeCreateManyArgs = {
    /**
     * The data used to create many VertifyBookingCodes.
     */
    data: Enumerable<VertifyBookingCodeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VertifyBookingCode update
   */
  export type VertifyBookingCodeUpdateArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * The data needed to update a VertifyBookingCode.
     */
    data: XOR<VertifyBookingCodeUpdateInput, VertifyBookingCodeUncheckedUpdateInput>
    /**
     * Choose, which VertifyBookingCode to update.
     */
    where: VertifyBookingCodeWhereUniqueInput
  }


  /**
   * VertifyBookingCode updateMany
   */
  export type VertifyBookingCodeUpdateManyArgs = {
    /**
     * The data used to update VertifyBookingCodes.
     */
    data: XOR<VertifyBookingCodeUpdateManyMutationInput, VertifyBookingCodeUncheckedUpdateManyInput>
    /**
     * Filter which VertifyBookingCodes to update
     */
    where?: VertifyBookingCodeWhereInput
  }


  /**
   * VertifyBookingCode upsert
   */
  export type VertifyBookingCodeUpsertArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * The filter to search for the VertifyBookingCode to update in case it exists.
     */
    where: VertifyBookingCodeWhereUniqueInput
    /**
     * In case the VertifyBookingCode found by the `where` argument doesn't exist, create a new VertifyBookingCode with this data.
     */
    create: XOR<VertifyBookingCodeCreateInput, VertifyBookingCodeUncheckedCreateInput>
    /**
     * In case the VertifyBookingCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VertifyBookingCodeUpdateInput, VertifyBookingCodeUncheckedUpdateInput>
  }


  /**
   * VertifyBookingCode delete
   */
  export type VertifyBookingCodeDeleteArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter which VertifyBookingCode to delete.
     */
    where: VertifyBookingCodeWhereUniqueInput
  }


  /**
   * VertifyBookingCode deleteMany
   */
  export type VertifyBookingCodeDeleteManyArgs = {
    /**
     * Filter which VertifyBookingCodes to delete
     */
    where?: VertifyBookingCodeWhereInput
  }


  /**
   * VertifyBookingCode.bookRoom
   */
  export type VertifyBookingCode$bookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    cursor?: BookRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * VertifyBookingCode without action
   */
  export type VertifyBookingCodeArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
  }



  /**
   * Model Open
   */


  export type AggregateOpen = {
    _count: OpenCountAggregateOutputType | null
    _avg: OpenAvgAggregateOutputType | null
    _sum: OpenSumAggregateOutputType | null
    _min: OpenMinAggregateOutputType | null
    _max: OpenMaxAggregateOutputType | null
  }

  export type OpenAvgAggregateOutputType = {
    id: number | null
    monOpen: number | null
    tueOpen: number | null
    wedOpen: number | null
    thursOpen: number | null
    friOpen: number | null
    satOpen: number | null
    sunOpen: number | null
    coWorkId: number | null
  }

  export type OpenSumAggregateOutputType = {
    id: number | null
    monOpen: number | null
    tueOpen: number | null
    wedOpen: number | null
    thursOpen: number | null
    friOpen: number | null
    satOpen: number | null
    sunOpen: number | null
    coWorkId: number | null
  }

  export type OpenMinAggregateOutputType = {
    id: number | null
    monOpen: number | null
    tueOpen: number | null
    wedOpen: number | null
    thursOpen: number | null
    friOpen: number | null
    satOpen: number | null
    sunOpen: number | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type OpenMaxAggregateOutputType = {
    id: number | null
    monOpen: number | null
    tueOpen: number | null
    wedOpen: number | null
    thursOpen: number | null
    friOpen: number | null
    satOpen: number | null
    sunOpen: number | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type OpenCountAggregateOutputType = {
    id: number
    monOpen: number
    tueOpen: number
    wedOpen: number
    thursOpen: number
    friOpen: number
    satOpen: number
    sunOpen: number
    coWorkId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type OpenAvgAggregateInputType = {
    id?: true
    monOpen?: true
    tueOpen?: true
    wedOpen?: true
    thursOpen?: true
    friOpen?: true
    satOpen?: true
    sunOpen?: true
    coWorkId?: true
  }

  export type OpenSumAggregateInputType = {
    id?: true
    monOpen?: true
    tueOpen?: true
    wedOpen?: true
    thursOpen?: true
    friOpen?: true
    satOpen?: true
    sunOpen?: true
    coWorkId?: true
  }

  export type OpenMinAggregateInputType = {
    id?: true
    monOpen?: true
    tueOpen?: true
    wedOpen?: true
    thursOpen?: true
    friOpen?: true
    satOpen?: true
    sunOpen?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type OpenMaxAggregateInputType = {
    id?: true
    monOpen?: true
    tueOpen?: true
    wedOpen?: true
    thursOpen?: true
    friOpen?: true
    satOpen?: true
    sunOpen?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type OpenCountAggregateInputType = {
    id?: true
    monOpen?: true
    tueOpen?: true
    wedOpen?: true
    thursOpen?: true
    friOpen?: true
    satOpen?: true
    sunOpen?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type OpenAggregateArgs = {
    /**
     * Filter which Open to aggregate.
     */
    where?: OpenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opens to fetch.
     */
    orderBy?: Enumerable<OpenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opens
    **/
    _count?: true | OpenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpenMaxAggregateInputType
  }

  export type GetOpenAggregateType<T extends OpenAggregateArgs> = {
        [P in keyof T & keyof AggregateOpen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpen[P]>
      : GetScalarType<T[P], AggregateOpen[P]>
  }




  export type OpenGroupByArgs = {
    where?: OpenWhereInput
    orderBy?: Enumerable<OpenOrderByWithAggregationInput>
    by: OpenScalarFieldEnum[]
    having?: OpenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpenCountAggregateInputType | true
    _avg?: OpenAvgAggregateInputType
    _sum?: OpenSumAggregateInputType
    _min?: OpenMinAggregateInputType
    _max?: OpenMaxAggregateInputType
  }


  export type OpenGroupByOutputType = {
    id: number
    monOpen: number
    tueOpen: number
    wedOpen: number
    thursOpen: number
    friOpen: number
    satOpen: number
    sunOpen: number
    coWorkId: number
    createAt: Date
    updateAt: Date
    _count: OpenCountAggregateOutputType | null
    _avg: OpenAvgAggregateOutputType | null
    _sum: OpenSumAggregateOutputType | null
    _min: OpenMinAggregateOutputType | null
    _max: OpenMaxAggregateOutputType | null
  }

  type GetOpenGroupByPayload<T extends OpenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OpenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpenGroupByOutputType[P]>
            : GetScalarType<T[P], OpenGroupByOutputType[P]>
        }
      >
    >


  export type OpenSelect = {
    id?: boolean
    monOpen?: boolean
    tueOpen?: boolean
    wedOpen?: boolean
    thursOpen?: boolean
    friOpen?: boolean
    satOpen?: boolean
    sunOpen?: boolean
    coWorkId?: boolean
    createAt?: boolean
    updateAt?: boolean
    cowork?: boolean | CoWorkArgs
  }


  export type OpenInclude = {
    cowork?: boolean | CoWorkArgs
  }

  export type OpenGetPayload<S extends boolean | null | undefined | OpenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Open :
    S extends undefined ? never :
    S extends { include: any } & (OpenArgs | OpenFindManyArgs)
    ? Open  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cowork' ? CoWorkGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OpenArgs | OpenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cowork' ? CoWorkGetPayload<S['select'][P]> :  P extends keyof Open ? Open[P] : never
  } 
      : Open


  type OpenCountArgs = 
    Omit<OpenFindManyArgs, 'select' | 'include'> & {
      select?: OpenCountAggregateInputType | true
    }

  export interface OpenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Open that matches the filter.
     * @param {OpenFindUniqueArgs} args - Arguments to find a Open
     * @example
     * // Get one Open
     * const open = await prisma.open.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OpenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OpenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Open'> extends True ? Prisma__OpenClient<OpenGetPayload<T>> : Prisma__OpenClient<OpenGetPayload<T> | null, null>

    /**
     * Find one Open that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OpenFindUniqueOrThrowArgs} args - Arguments to find a Open
     * @example
     * // Get one Open
     * const open = await prisma.open.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OpenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OpenFindUniqueOrThrowArgs>
    ): Prisma__OpenClient<OpenGetPayload<T>>

    /**
     * Find the first Open that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenFindFirstArgs} args - Arguments to find a Open
     * @example
     * // Get one Open
     * const open = await prisma.open.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OpenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OpenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Open'> extends True ? Prisma__OpenClient<OpenGetPayload<T>> : Prisma__OpenClient<OpenGetPayload<T> | null, null>

    /**
     * Find the first Open that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenFindFirstOrThrowArgs} args - Arguments to find a Open
     * @example
     * // Get one Open
     * const open = await prisma.open.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OpenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OpenFindFirstOrThrowArgs>
    ): Prisma__OpenClient<OpenGetPayload<T>>

    /**
     * Find zero or more Opens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opens
     * const opens = await prisma.open.findMany()
     * 
     * // Get first 10 Opens
     * const opens = await prisma.open.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openWithIdOnly = await prisma.open.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OpenFindManyArgs>(
      args?: SelectSubset<T, OpenFindManyArgs>
    ): Prisma.PrismaPromise<Array<OpenGetPayload<T>>>

    /**
     * Create a Open.
     * @param {OpenCreateArgs} args - Arguments to create a Open.
     * @example
     * // Create one Open
     * const Open = await prisma.open.create({
     *   data: {
     *     // ... data to create a Open
     *   }
     * })
     * 
    **/
    create<T extends OpenCreateArgs>(
      args: SelectSubset<T, OpenCreateArgs>
    ): Prisma__OpenClient<OpenGetPayload<T>>

    /**
     * Create many Opens.
     *     @param {OpenCreateManyArgs} args - Arguments to create many Opens.
     *     @example
     *     // Create many Opens
     *     const open = await prisma.open.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OpenCreateManyArgs>(
      args?: SelectSubset<T, OpenCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Open.
     * @param {OpenDeleteArgs} args - Arguments to delete one Open.
     * @example
     * // Delete one Open
     * const Open = await prisma.open.delete({
     *   where: {
     *     // ... filter to delete one Open
     *   }
     * })
     * 
    **/
    delete<T extends OpenDeleteArgs>(
      args: SelectSubset<T, OpenDeleteArgs>
    ): Prisma__OpenClient<OpenGetPayload<T>>

    /**
     * Update one Open.
     * @param {OpenUpdateArgs} args - Arguments to update one Open.
     * @example
     * // Update one Open
     * const open = await prisma.open.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OpenUpdateArgs>(
      args: SelectSubset<T, OpenUpdateArgs>
    ): Prisma__OpenClient<OpenGetPayload<T>>

    /**
     * Delete zero or more Opens.
     * @param {OpenDeleteManyArgs} args - Arguments to filter Opens to delete.
     * @example
     * // Delete a few Opens
     * const { count } = await prisma.open.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OpenDeleteManyArgs>(
      args?: SelectSubset<T, OpenDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opens
     * const open = await prisma.open.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OpenUpdateManyArgs>(
      args: SelectSubset<T, OpenUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Open.
     * @param {OpenUpsertArgs} args - Arguments to update or create a Open.
     * @example
     * // Update or create a Open
     * const open = await prisma.open.upsert({
     *   create: {
     *     // ... data to create a Open
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Open we want to update
     *   }
     * })
    **/
    upsert<T extends OpenUpsertArgs>(
      args: SelectSubset<T, OpenUpsertArgs>
    ): Prisma__OpenClient<OpenGetPayload<T>>

    /**
     * Count the number of Opens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCountArgs} args - Arguments to filter Opens to count.
     * @example
     * // Count the number of Opens
     * const count = await prisma.open.count({
     *   where: {
     *     // ... the filter for the Opens we want to count
     *   }
     * })
    **/
    count<T extends OpenCountArgs>(
      args?: Subset<T, OpenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Open.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpenAggregateArgs>(args: Subset<T, OpenAggregateArgs>): Prisma.PrismaPromise<GetOpenAggregateType<T>>

    /**
     * Group by Open.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpenGroupByArgs['orderBy'] }
        : { orderBy?: OpenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Open.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OpenClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cowork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Open base type for findUnique actions
   */
  export type OpenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * Filter, which Open to fetch.
     */
    where: OpenWhereUniqueInput
  }

  /**
   * Open findUnique
   */
  export interface OpenFindUniqueArgs extends OpenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Open findUniqueOrThrow
   */
  export type OpenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * Filter, which Open to fetch.
     */
    where: OpenWhereUniqueInput
  }


  /**
   * Open base type for findFirst actions
   */
  export type OpenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * Filter, which Open to fetch.
     */
    where?: OpenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opens to fetch.
     */
    orderBy?: Enumerable<OpenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opens.
     */
    cursor?: OpenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opens.
     */
    distinct?: Enumerable<OpenScalarFieldEnum>
  }

  /**
   * Open findFirst
   */
  export interface OpenFindFirstArgs extends OpenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Open findFirstOrThrow
   */
  export type OpenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * Filter, which Open to fetch.
     */
    where?: OpenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opens to fetch.
     */
    orderBy?: Enumerable<OpenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opens.
     */
    cursor?: OpenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opens.
     */
    distinct?: Enumerable<OpenScalarFieldEnum>
  }


  /**
   * Open findMany
   */
  export type OpenFindManyArgs = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * Filter, which Opens to fetch.
     */
    where?: OpenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opens to fetch.
     */
    orderBy?: Enumerable<OpenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opens.
     */
    cursor?: OpenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opens.
     */
    skip?: number
    distinct?: Enumerable<OpenScalarFieldEnum>
  }


  /**
   * Open create
   */
  export type OpenCreateArgs = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * The data needed to create a Open.
     */
    data: XOR<OpenCreateInput, OpenUncheckedCreateInput>
  }


  /**
   * Open createMany
   */
  export type OpenCreateManyArgs = {
    /**
     * The data used to create many Opens.
     */
    data: Enumerable<OpenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Open update
   */
  export type OpenUpdateArgs = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * The data needed to update a Open.
     */
    data: XOR<OpenUpdateInput, OpenUncheckedUpdateInput>
    /**
     * Choose, which Open to update.
     */
    where: OpenWhereUniqueInput
  }


  /**
   * Open updateMany
   */
  export type OpenUpdateManyArgs = {
    /**
     * The data used to update Opens.
     */
    data: XOR<OpenUpdateManyMutationInput, OpenUncheckedUpdateManyInput>
    /**
     * Filter which Opens to update
     */
    where?: OpenWhereInput
  }


  /**
   * Open upsert
   */
  export type OpenUpsertArgs = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * The filter to search for the Open to update in case it exists.
     */
    where: OpenWhereUniqueInput
    /**
     * In case the Open found by the `where` argument doesn't exist, create a new Open with this data.
     */
    create: XOR<OpenCreateInput, OpenUncheckedCreateInput>
    /**
     * In case the Open was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpenUpdateInput, OpenUncheckedUpdateInput>
  }


  /**
   * Open delete
   */
  export type OpenDeleteArgs = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
    /**
     * Filter which Open to delete.
     */
    where: OpenWhereUniqueInput
  }


  /**
   * Open deleteMany
   */
  export type OpenDeleteManyArgs = {
    /**
     * Filter which Opens to delete
     */
    where?: OpenWhereInput
  }


  /**
   * Open without action
   */
  export type OpenArgs = {
    /**
     * Select specific fields to fetch from the Open
     */
    select?: OpenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenInclude | null
  }



  /**
   * Model Close
   */


  export type AggregateClose = {
    _count: CloseCountAggregateOutputType | null
    _avg: CloseAvgAggregateOutputType | null
    _sum: CloseSumAggregateOutputType | null
    _min: CloseMinAggregateOutputType | null
    _max: CloseMaxAggregateOutputType | null
  }

  export type CloseAvgAggregateOutputType = {
    id: number | null
    monClose: number | null
    tueClose: number | null
    wedClose: number | null
    thursClose: number | null
    friClose: number | null
    satClose: number | null
    sunClose: number | null
    coWorkId: number | null
  }

  export type CloseSumAggregateOutputType = {
    id: number | null
    monClose: number | null
    tueClose: number | null
    wedClose: number | null
    thursClose: number | null
    friClose: number | null
    satClose: number | null
    sunClose: number | null
    coWorkId: number | null
  }

  export type CloseMinAggregateOutputType = {
    id: number | null
    monClose: number | null
    tueClose: number | null
    wedClose: number | null
    thursClose: number | null
    friClose: number | null
    satClose: number | null
    sunClose: number | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CloseMaxAggregateOutputType = {
    id: number | null
    monClose: number | null
    tueClose: number | null
    wedClose: number | null
    thursClose: number | null
    friClose: number | null
    satClose: number | null
    sunClose: number | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CloseCountAggregateOutputType = {
    id: number
    monClose: number
    tueClose: number
    wedClose: number
    thursClose: number
    friClose: number
    satClose: number
    sunClose: number
    coWorkId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CloseAvgAggregateInputType = {
    id?: true
    monClose?: true
    tueClose?: true
    wedClose?: true
    thursClose?: true
    friClose?: true
    satClose?: true
    sunClose?: true
    coWorkId?: true
  }

  export type CloseSumAggregateInputType = {
    id?: true
    monClose?: true
    tueClose?: true
    wedClose?: true
    thursClose?: true
    friClose?: true
    satClose?: true
    sunClose?: true
    coWorkId?: true
  }

  export type CloseMinAggregateInputType = {
    id?: true
    monClose?: true
    tueClose?: true
    wedClose?: true
    thursClose?: true
    friClose?: true
    satClose?: true
    sunClose?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type CloseMaxAggregateInputType = {
    id?: true
    monClose?: true
    tueClose?: true
    wedClose?: true
    thursClose?: true
    friClose?: true
    satClose?: true
    sunClose?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type CloseCountAggregateInputType = {
    id?: true
    monClose?: true
    tueClose?: true
    wedClose?: true
    thursClose?: true
    friClose?: true
    satClose?: true
    sunClose?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CloseAggregateArgs = {
    /**
     * Filter which Close to aggregate.
     */
    where?: CloseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Closes to fetch.
     */
    orderBy?: Enumerable<CloseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CloseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Closes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Closes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Closes
    **/
    _count?: true | CloseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CloseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CloseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CloseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CloseMaxAggregateInputType
  }

  export type GetCloseAggregateType<T extends CloseAggregateArgs> = {
        [P in keyof T & keyof AggregateClose]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClose[P]>
      : GetScalarType<T[P], AggregateClose[P]>
  }




  export type CloseGroupByArgs = {
    where?: CloseWhereInput
    orderBy?: Enumerable<CloseOrderByWithAggregationInput>
    by: CloseScalarFieldEnum[]
    having?: CloseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CloseCountAggregateInputType | true
    _avg?: CloseAvgAggregateInputType
    _sum?: CloseSumAggregateInputType
    _min?: CloseMinAggregateInputType
    _max?: CloseMaxAggregateInputType
  }


  export type CloseGroupByOutputType = {
    id: number
    monClose: number
    tueClose: number
    wedClose: number
    thursClose: number
    friClose: number
    satClose: number
    sunClose: number
    coWorkId: number
    createAt: Date
    updateAt: Date
    _count: CloseCountAggregateOutputType | null
    _avg: CloseAvgAggregateOutputType | null
    _sum: CloseSumAggregateOutputType | null
    _min: CloseMinAggregateOutputType | null
    _max: CloseMaxAggregateOutputType | null
  }

  type GetCloseGroupByPayload<T extends CloseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CloseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CloseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CloseGroupByOutputType[P]>
            : GetScalarType<T[P], CloseGroupByOutputType[P]>
        }
      >
    >


  export type CloseSelect = {
    id?: boolean
    monClose?: boolean
    tueClose?: boolean
    wedClose?: boolean
    thursClose?: boolean
    friClose?: boolean
    satClose?: boolean
    sunClose?: boolean
    coWorkId?: boolean
    createAt?: boolean
    updateAt?: boolean
    cowork?: boolean | CoWorkArgs
  }


  export type CloseInclude = {
    cowork?: boolean | CoWorkArgs
  }

  export type CloseGetPayload<S extends boolean | null | undefined | CloseArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Close :
    S extends undefined ? never :
    S extends { include: any } & (CloseArgs | CloseFindManyArgs)
    ? Close  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cowork' ? CoWorkGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CloseArgs | CloseFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cowork' ? CoWorkGetPayload<S['select'][P]> :  P extends keyof Close ? Close[P] : never
  } 
      : Close


  type CloseCountArgs = 
    Omit<CloseFindManyArgs, 'select' | 'include'> & {
      select?: CloseCountAggregateInputType | true
    }

  export interface CloseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Close that matches the filter.
     * @param {CloseFindUniqueArgs} args - Arguments to find a Close
     * @example
     * // Get one Close
     * const close = await prisma.close.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CloseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CloseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Close'> extends True ? Prisma__CloseClient<CloseGetPayload<T>> : Prisma__CloseClient<CloseGetPayload<T> | null, null>

    /**
     * Find one Close that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CloseFindUniqueOrThrowArgs} args - Arguments to find a Close
     * @example
     * // Get one Close
     * const close = await prisma.close.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CloseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CloseFindUniqueOrThrowArgs>
    ): Prisma__CloseClient<CloseGetPayload<T>>

    /**
     * Find the first Close that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFindFirstArgs} args - Arguments to find a Close
     * @example
     * // Get one Close
     * const close = await prisma.close.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CloseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CloseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Close'> extends True ? Prisma__CloseClient<CloseGetPayload<T>> : Prisma__CloseClient<CloseGetPayload<T> | null, null>

    /**
     * Find the first Close that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFindFirstOrThrowArgs} args - Arguments to find a Close
     * @example
     * // Get one Close
     * const close = await prisma.close.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CloseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CloseFindFirstOrThrowArgs>
    ): Prisma__CloseClient<CloseGetPayload<T>>

    /**
     * Find zero or more Closes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Closes
     * const closes = await prisma.close.findMany()
     * 
     * // Get first 10 Closes
     * const closes = await prisma.close.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const closeWithIdOnly = await prisma.close.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CloseFindManyArgs>(
      args?: SelectSubset<T, CloseFindManyArgs>
    ): Prisma.PrismaPromise<Array<CloseGetPayload<T>>>

    /**
     * Create a Close.
     * @param {CloseCreateArgs} args - Arguments to create a Close.
     * @example
     * // Create one Close
     * const Close = await prisma.close.create({
     *   data: {
     *     // ... data to create a Close
     *   }
     * })
     * 
    **/
    create<T extends CloseCreateArgs>(
      args: SelectSubset<T, CloseCreateArgs>
    ): Prisma__CloseClient<CloseGetPayload<T>>

    /**
     * Create many Closes.
     *     @param {CloseCreateManyArgs} args - Arguments to create many Closes.
     *     @example
     *     // Create many Closes
     *     const close = await prisma.close.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CloseCreateManyArgs>(
      args?: SelectSubset<T, CloseCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Close.
     * @param {CloseDeleteArgs} args - Arguments to delete one Close.
     * @example
     * // Delete one Close
     * const Close = await prisma.close.delete({
     *   where: {
     *     // ... filter to delete one Close
     *   }
     * })
     * 
    **/
    delete<T extends CloseDeleteArgs>(
      args: SelectSubset<T, CloseDeleteArgs>
    ): Prisma__CloseClient<CloseGetPayload<T>>

    /**
     * Update one Close.
     * @param {CloseUpdateArgs} args - Arguments to update one Close.
     * @example
     * // Update one Close
     * const close = await prisma.close.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CloseUpdateArgs>(
      args: SelectSubset<T, CloseUpdateArgs>
    ): Prisma__CloseClient<CloseGetPayload<T>>

    /**
     * Delete zero or more Closes.
     * @param {CloseDeleteManyArgs} args - Arguments to filter Closes to delete.
     * @example
     * // Delete a few Closes
     * const { count } = await prisma.close.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CloseDeleteManyArgs>(
      args?: SelectSubset<T, CloseDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Closes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Closes
     * const close = await prisma.close.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CloseUpdateManyArgs>(
      args: SelectSubset<T, CloseUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Close.
     * @param {CloseUpsertArgs} args - Arguments to update or create a Close.
     * @example
     * // Update or create a Close
     * const close = await prisma.close.upsert({
     *   create: {
     *     // ... data to create a Close
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Close we want to update
     *   }
     * })
    **/
    upsert<T extends CloseUpsertArgs>(
      args: SelectSubset<T, CloseUpsertArgs>
    ): Prisma__CloseClient<CloseGetPayload<T>>

    /**
     * Count the number of Closes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseCountArgs} args - Arguments to filter Closes to count.
     * @example
     * // Count the number of Closes
     * const count = await prisma.close.count({
     *   where: {
     *     // ... the filter for the Closes we want to count
     *   }
     * })
    **/
    count<T extends CloseCountArgs>(
      args?: Subset<T, CloseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CloseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Close.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CloseAggregateArgs>(args: Subset<T, CloseAggregateArgs>): Prisma.PrismaPromise<GetCloseAggregateType<T>>

    /**
     * Group by Close.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CloseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CloseGroupByArgs['orderBy'] }
        : { orderBy?: CloseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CloseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCloseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Close.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CloseClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cowork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Close base type for findUnique actions
   */
  export type CloseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * Filter, which Close to fetch.
     */
    where: CloseWhereUniqueInput
  }

  /**
   * Close findUnique
   */
  export interface CloseFindUniqueArgs extends CloseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Close findUniqueOrThrow
   */
  export type CloseFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * Filter, which Close to fetch.
     */
    where: CloseWhereUniqueInput
  }


  /**
   * Close base type for findFirst actions
   */
  export type CloseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * Filter, which Close to fetch.
     */
    where?: CloseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Closes to fetch.
     */
    orderBy?: Enumerable<CloseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Closes.
     */
    cursor?: CloseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Closes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Closes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Closes.
     */
    distinct?: Enumerable<CloseScalarFieldEnum>
  }

  /**
   * Close findFirst
   */
  export interface CloseFindFirstArgs extends CloseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Close findFirstOrThrow
   */
  export type CloseFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * Filter, which Close to fetch.
     */
    where?: CloseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Closes to fetch.
     */
    orderBy?: Enumerable<CloseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Closes.
     */
    cursor?: CloseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Closes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Closes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Closes.
     */
    distinct?: Enumerable<CloseScalarFieldEnum>
  }


  /**
   * Close findMany
   */
  export type CloseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * Filter, which Closes to fetch.
     */
    where?: CloseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Closes to fetch.
     */
    orderBy?: Enumerable<CloseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Closes.
     */
    cursor?: CloseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Closes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Closes.
     */
    skip?: number
    distinct?: Enumerable<CloseScalarFieldEnum>
  }


  /**
   * Close create
   */
  export type CloseCreateArgs = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * The data needed to create a Close.
     */
    data: XOR<CloseCreateInput, CloseUncheckedCreateInput>
  }


  /**
   * Close createMany
   */
  export type CloseCreateManyArgs = {
    /**
     * The data used to create many Closes.
     */
    data: Enumerable<CloseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Close update
   */
  export type CloseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * The data needed to update a Close.
     */
    data: XOR<CloseUpdateInput, CloseUncheckedUpdateInput>
    /**
     * Choose, which Close to update.
     */
    where: CloseWhereUniqueInput
  }


  /**
   * Close updateMany
   */
  export type CloseUpdateManyArgs = {
    /**
     * The data used to update Closes.
     */
    data: XOR<CloseUpdateManyMutationInput, CloseUncheckedUpdateManyInput>
    /**
     * Filter which Closes to update
     */
    where?: CloseWhereInput
  }


  /**
   * Close upsert
   */
  export type CloseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * The filter to search for the Close to update in case it exists.
     */
    where: CloseWhereUniqueInput
    /**
     * In case the Close found by the `where` argument doesn't exist, create a new Close with this data.
     */
    create: XOR<CloseCreateInput, CloseUncheckedCreateInput>
    /**
     * In case the Close was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CloseUpdateInput, CloseUncheckedUpdateInput>
  }


  /**
   * Close delete
   */
  export type CloseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
    /**
     * Filter which Close to delete.
     */
    where: CloseWhereUniqueInput
  }


  /**
   * Close deleteMany
   */
  export type CloseDeleteManyArgs = {
    /**
     * Filter which Closes to delete
     */
    where?: CloseWhereInput
  }


  /**
   * Close without action
   */
  export type CloseArgs = {
    /**
     * Select specific fields to fetch from the Close
     */
    select?: CloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CloseInclude | null
  }



  /**
   * Model OpenClose24Hours
   */


  export type AggregateOpenClose24Hours = {
    _count: OpenClose24HoursCountAggregateOutputType | null
    _avg: OpenClose24HoursAvgAggregateOutputType | null
    _sum: OpenClose24HoursSumAggregateOutputType | null
    _min: OpenClose24HoursMinAggregateOutputType | null
    _max: OpenClose24HoursMaxAggregateOutputType | null
  }

  export type OpenClose24HoursAvgAggregateOutputType = {
    id: number | null
    coWorkId: number | null
  }

  export type OpenClose24HoursSumAggregateOutputType = {
    id: number | null
    coWorkId: number | null
  }

  export type OpenClose24HoursMinAggregateOutputType = {
    id: number | null
    mon24hours: boolean | null
    tue24hours: boolean | null
    wed24hours: boolean | null
    thurs24hours: boolean | null
    fri24hours: boolean | null
    sat24hours: boolean | null
    sun24hours: boolean | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type OpenClose24HoursMaxAggregateOutputType = {
    id: number | null
    mon24hours: boolean | null
    tue24hours: boolean | null
    wed24hours: boolean | null
    thurs24hours: boolean | null
    fri24hours: boolean | null
    sat24hours: boolean | null
    sun24hours: boolean | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type OpenClose24HoursCountAggregateOutputType = {
    id: number
    mon24hours: number
    tue24hours: number
    wed24hours: number
    thurs24hours: number
    fri24hours: number
    sat24hours: number
    sun24hours: number
    coWorkId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type OpenClose24HoursAvgAggregateInputType = {
    id?: true
    coWorkId?: true
  }

  export type OpenClose24HoursSumAggregateInputType = {
    id?: true
    coWorkId?: true
  }

  export type OpenClose24HoursMinAggregateInputType = {
    id?: true
    mon24hours?: true
    tue24hours?: true
    wed24hours?: true
    thurs24hours?: true
    fri24hours?: true
    sat24hours?: true
    sun24hours?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type OpenClose24HoursMaxAggregateInputType = {
    id?: true
    mon24hours?: true
    tue24hours?: true
    wed24hours?: true
    thurs24hours?: true
    fri24hours?: true
    sat24hours?: true
    sun24hours?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type OpenClose24HoursCountAggregateInputType = {
    id?: true
    mon24hours?: true
    tue24hours?: true
    wed24hours?: true
    thurs24hours?: true
    fri24hours?: true
    sat24hours?: true
    sun24hours?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type OpenClose24HoursAggregateArgs = {
    /**
     * Filter which OpenClose24Hours to aggregate.
     */
    where?: OpenClose24HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenClose24Hours to fetch.
     */
    orderBy?: Enumerable<OpenClose24HoursOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpenClose24HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenClose24Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenClose24Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpenClose24Hours
    **/
    _count?: true | OpenClose24HoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpenClose24HoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpenClose24HoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpenClose24HoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpenClose24HoursMaxAggregateInputType
  }

  export type GetOpenClose24HoursAggregateType<T extends OpenClose24HoursAggregateArgs> = {
        [P in keyof T & keyof AggregateOpenClose24Hours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpenClose24Hours[P]>
      : GetScalarType<T[P], AggregateOpenClose24Hours[P]>
  }




  export type OpenClose24HoursGroupByArgs = {
    where?: OpenClose24HoursWhereInput
    orderBy?: Enumerable<OpenClose24HoursOrderByWithAggregationInput>
    by: OpenClose24HoursScalarFieldEnum[]
    having?: OpenClose24HoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpenClose24HoursCountAggregateInputType | true
    _avg?: OpenClose24HoursAvgAggregateInputType
    _sum?: OpenClose24HoursSumAggregateInputType
    _min?: OpenClose24HoursMinAggregateInputType
    _max?: OpenClose24HoursMaxAggregateInputType
  }


  export type OpenClose24HoursGroupByOutputType = {
    id: number
    mon24hours: boolean
    tue24hours: boolean
    wed24hours: boolean
    thurs24hours: boolean
    fri24hours: boolean
    sat24hours: boolean
    sun24hours: boolean
    coWorkId: number
    createAt: Date
    updateAt: Date
    _count: OpenClose24HoursCountAggregateOutputType | null
    _avg: OpenClose24HoursAvgAggregateOutputType | null
    _sum: OpenClose24HoursSumAggregateOutputType | null
    _min: OpenClose24HoursMinAggregateOutputType | null
    _max: OpenClose24HoursMaxAggregateOutputType | null
  }

  type GetOpenClose24HoursGroupByPayload<T extends OpenClose24HoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OpenClose24HoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpenClose24HoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpenClose24HoursGroupByOutputType[P]>
            : GetScalarType<T[P], OpenClose24HoursGroupByOutputType[P]>
        }
      >
    >


  export type OpenClose24HoursSelect = {
    id?: boolean
    mon24hours?: boolean
    tue24hours?: boolean
    wed24hours?: boolean
    thurs24hours?: boolean
    fri24hours?: boolean
    sat24hours?: boolean
    sun24hours?: boolean
    coWorkId?: boolean
    createAt?: boolean
    updateAt?: boolean
    cowork?: boolean | CoWorkArgs
  }


  export type OpenClose24HoursInclude = {
    cowork?: boolean | CoWorkArgs
  }

  export type OpenClose24HoursGetPayload<S extends boolean | null | undefined | OpenClose24HoursArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OpenClose24Hours :
    S extends undefined ? never :
    S extends { include: any } & (OpenClose24HoursArgs | OpenClose24HoursFindManyArgs)
    ? OpenClose24Hours  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cowork' ? CoWorkGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OpenClose24HoursArgs | OpenClose24HoursFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cowork' ? CoWorkGetPayload<S['select'][P]> :  P extends keyof OpenClose24Hours ? OpenClose24Hours[P] : never
  } 
      : OpenClose24Hours


  type OpenClose24HoursCountArgs = 
    Omit<OpenClose24HoursFindManyArgs, 'select' | 'include'> & {
      select?: OpenClose24HoursCountAggregateInputType | true
    }

  export interface OpenClose24HoursDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OpenClose24Hours that matches the filter.
     * @param {OpenClose24HoursFindUniqueArgs} args - Arguments to find a OpenClose24Hours
     * @example
     * // Get one OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OpenClose24HoursFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OpenClose24HoursFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OpenClose24Hours'> extends True ? Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T>> : Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T> | null, null>

    /**
     * Find one OpenClose24Hours that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OpenClose24HoursFindUniqueOrThrowArgs} args - Arguments to find a OpenClose24Hours
     * @example
     * // Get one OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OpenClose24HoursFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OpenClose24HoursFindUniqueOrThrowArgs>
    ): Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T>>

    /**
     * Find the first OpenClose24Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenClose24HoursFindFirstArgs} args - Arguments to find a OpenClose24Hours
     * @example
     * // Get one OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OpenClose24HoursFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OpenClose24HoursFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OpenClose24Hours'> extends True ? Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T>> : Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T> | null, null>

    /**
     * Find the first OpenClose24Hours that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenClose24HoursFindFirstOrThrowArgs} args - Arguments to find a OpenClose24Hours
     * @example
     * // Get one OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OpenClose24HoursFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OpenClose24HoursFindFirstOrThrowArgs>
    ): Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T>>

    /**
     * Find zero or more OpenClose24Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenClose24HoursFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.findMany()
     * 
     * // Get first 10 OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openClose24HoursWithIdOnly = await prisma.openClose24Hours.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OpenClose24HoursFindManyArgs>(
      args?: SelectSubset<T, OpenClose24HoursFindManyArgs>
    ): Prisma.PrismaPromise<Array<OpenClose24HoursGetPayload<T>>>

    /**
     * Create a OpenClose24Hours.
     * @param {OpenClose24HoursCreateArgs} args - Arguments to create a OpenClose24Hours.
     * @example
     * // Create one OpenClose24Hours
     * const OpenClose24Hours = await prisma.openClose24Hours.create({
     *   data: {
     *     // ... data to create a OpenClose24Hours
     *   }
     * })
     * 
    **/
    create<T extends OpenClose24HoursCreateArgs>(
      args: SelectSubset<T, OpenClose24HoursCreateArgs>
    ): Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T>>

    /**
     * Create many OpenClose24Hours.
     *     @param {OpenClose24HoursCreateManyArgs} args - Arguments to create many OpenClose24Hours.
     *     @example
     *     // Create many OpenClose24Hours
     *     const openClose24Hours = await prisma.openClose24Hours.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OpenClose24HoursCreateManyArgs>(
      args?: SelectSubset<T, OpenClose24HoursCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OpenClose24Hours.
     * @param {OpenClose24HoursDeleteArgs} args - Arguments to delete one OpenClose24Hours.
     * @example
     * // Delete one OpenClose24Hours
     * const OpenClose24Hours = await prisma.openClose24Hours.delete({
     *   where: {
     *     // ... filter to delete one OpenClose24Hours
     *   }
     * })
     * 
    **/
    delete<T extends OpenClose24HoursDeleteArgs>(
      args: SelectSubset<T, OpenClose24HoursDeleteArgs>
    ): Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T>>

    /**
     * Update one OpenClose24Hours.
     * @param {OpenClose24HoursUpdateArgs} args - Arguments to update one OpenClose24Hours.
     * @example
     * // Update one OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OpenClose24HoursUpdateArgs>(
      args: SelectSubset<T, OpenClose24HoursUpdateArgs>
    ): Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T>>

    /**
     * Delete zero or more OpenClose24Hours.
     * @param {OpenClose24HoursDeleteManyArgs} args - Arguments to filter OpenClose24Hours to delete.
     * @example
     * // Delete a few OpenClose24Hours
     * const { count } = await prisma.openClose24Hours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OpenClose24HoursDeleteManyArgs>(
      args?: SelectSubset<T, OpenClose24HoursDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpenClose24Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenClose24HoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OpenClose24HoursUpdateManyArgs>(
      args: SelectSubset<T, OpenClose24HoursUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OpenClose24Hours.
     * @param {OpenClose24HoursUpsertArgs} args - Arguments to update or create a OpenClose24Hours.
     * @example
     * // Update or create a OpenClose24Hours
     * const openClose24Hours = await prisma.openClose24Hours.upsert({
     *   create: {
     *     // ... data to create a OpenClose24Hours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpenClose24Hours we want to update
     *   }
     * })
    **/
    upsert<T extends OpenClose24HoursUpsertArgs>(
      args: SelectSubset<T, OpenClose24HoursUpsertArgs>
    ): Prisma__OpenClose24HoursClient<OpenClose24HoursGetPayload<T>>

    /**
     * Count the number of OpenClose24Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenClose24HoursCountArgs} args - Arguments to filter OpenClose24Hours to count.
     * @example
     * // Count the number of OpenClose24Hours
     * const count = await prisma.openClose24Hours.count({
     *   where: {
     *     // ... the filter for the OpenClose24Hours we want to count
     *   }
     * })
    **/
    count<T extends OpenClose24HoursCountArgs>(
      args?: Subset<T, OpenClose24HoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpenClose24HoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpenClose24Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenClose24HoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpenClose24HoursAggregateArgs>(args: Subset<T, OpenClose24HoursAggregateArgs>): Prisma.PrismaPromise<GetOpenClose24HoursAggregateType<T>>

    /**
     * Group by OpenClose24Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenClose24HoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpenClose24HoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpenClose24HoursGroupByArgs['orderBy'] }
        : { orderBy?: OpenClose24HoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpenClose24HoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpenClose24HoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OpenClose24Hours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OpenClose24HoursClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cowork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * OpenClose24Hours base type for findUnique actions
   */
  export type OpenClose24HoursFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * Filter, which OpenClose24Hours to fetch.
     */
    where: OpenClose24HoursWhereUniqueInput
  }

  /**
   * OpenClose24Hours findUnique
   */
  export interface OpenClose24HoursFindUniqueArgs extends OpenClose24HoursFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OpenClose24Hours findUniqueOrThrow
   */
  export type OpenClose24HoursFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * Filter, which OpenClose24Hours to fetch.
     */
    where: OpenClose24HoursWhereUniqueInput
  }


  /**
   * OpenClose24Hours base type for findFirst actions
   */
  export type OpenClose24HoursFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * Filter, which OpenClose24Hours to fetch.
     */
    where?: OpenClose24HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenClose24Hours to fetch.
     */
    orderBy?: Enumerable<OpenClose24HoursOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenClose24Hours.
     */
    cursor?: OpenClose24HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenClose24Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenClose24Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenClose24Hours.
     */
    distinct?: Enumerable<OpenClose24HoursScalarFieldEnum>
  }

  /**
   * OpenClose24Hours findFirst
   */
  export interface OpenClose24HoursFindFirstArgs extends OpenClose24HoursFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OpenClose24Hours findFirstOrThrow
   */
  export type OpenClose24HoursFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * Filter, which OpenClose24Hours to fetch.
     */
    where?: OpenClose24HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenClose24Hours to fetch.
     */
    orderBy?: Enumerable<OpenClose24HoursOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenClose24Hours.
     */
    cursor?: OpenClose24HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenClose24Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenClose24Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenClose24Hours.
     */
    distinct?: Enumerable<OpenClose24HoursScalarFieldEnum>
  }


  /**
   * OpenClose24Hours findMany
   */
  export type OpenClose24HoursFindManyArgs = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * Filter, which OpenClose24Hours to fetch.
     */
    where?: OpenClose24HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenClose24Hours to fetch.
     */
    orderBy?: Enumerable<OpenClose24HoursOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpenClose24Hours.
     */
    cursor?: OpenClose24HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenClose24Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenClose24Hours.
     */
    skip?: number
    distinct?: Enumerable<OpenClose24HoursScalarFieldEnum>
  }


  /**
   * OpenClose24Hours create
   */
  export type OpenClose24HoursCreateArgs = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * The data needed to create a OpenClose24Hours.
     */
    data: XOR<OpenClose24HoursCreateInput, OpenClose24HoursUncheckedCreateInput>
  }


  /**
   * OpenClose24Hours createMany
   */
  export type OpenClose24HoursCreateManyArgs = {
    /**
     * The data used to create many OpenClose24Hours.
     */
    data: Enumerable<OpenClose24HoursCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OpenClose24Hours update
   */
  export type OpenClose24HoursUpdateArgs = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * The data needed to update a OpenClose24Hours.
     */
    data: XOR<OpenClose24HoursUpdateInput, OpenClose24HoursUncheckedUpdateInput>
    /**
     * Choose, which OpenClose24Hours to update.
     */
    where: OpenClose24HoursWhereUniqueInput
  }


  /**
   * OpenClose24Hours updateMany
   */
  export type OpenClose24HoursUpdateManyArgs = {
    /**
     * The data used to update OpenClose24Hours.
     */
    data: XOR<OpenClose24HoursUpdateManyMutationInput, OpenClose24HoursUncheckedUpdateManyInput>
    /**
     * Filter which OpenClose24Hours to update
     */
    where?: OpenClose24HoursWhereInput
  }


  /**
   * OpenClose24Hours upsert
   */
  export type OpenClose24HoursUpsertArgs = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * The filter to search for the OpenClose24Hours to update in case it exists.
     */
    where: OpenClose24HoursWhereUniqueInput
    /**
     * In case the OpenClose24Hours found by the `where` argument doesn't exist, create a new OpenClose24Hours with this data.
     */
    create: XOR<OpenClose24HoursCreateInput, OpenClose24HoursUncheckedCreateInput>
    /**
     * In case the OpenClose24Hours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpenClose24HoursUpdateInput, OpenClose24HoursUncheckedUpdateInput>
  }


  /**
   * OpenClose24Hours delete
   */
  export type OpenClose24HoursDeleteArgs = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
    /**
     * Filter which OpenClose24Hours to delete.
     */
    where: OpenClose24HoursWhereUniqueInput
  }


  /**
   * OpenClose24Hours deleteMany
   */
  export type OpenClose24HoursDeleteManyArgs = {
    /**
     * Filter which OpenClose24Hours to delete
     */
    where?: OpenClose24HoursWhereInput
  }


  /**
   * OpenClose24Hours without action
   */
  export type OpenClose24HoursArgs = {
    /**
     * Select specific fields to fetch from the OpenClose24Hours
     */
    select?: OpenClose24HoursSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenClose24HoursInclude | null
  }



  /**
   * Model OpenCloseBoolean
   */


  export type AggregateOpenCloseBoolean = {
    _count: OpenCloseBooleanCountAggregateOutputType | null
    _avg: OpenCloseBooleanAvgAggregateOutputType | null
    _sum: OpenCloseBooleanSumAggregateOutputType | null
    _min: OpenCloseBooleanMinAggregateOutputType | null
    _max: OpenCloseBooleanMaxAggregateOutputType | null
  }

  export type OpenCloseBooleanAvgAggregateOutputType = {
    id: number | null
    coWorkId: number | null
  }

  export type OpenCloseBooleanSumAggregateOutputType = {
    id: number | null
    coWorkId: number | null
  }

  export type OpenCloseBooleanMinAggregateOutputType = {
    id: number | null
    monOnOff: boolean | null
    tueOnOff: boolean | null
    wedOnOff: boolean | null
    thursOnOff: boolean | null
    friOnOff: boolean | null
    satOnOff: boolean | null
    sunOnOff: boolean | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type OpenCloseBooleanMaxAggregateOutputType = {
    id: number | null
    monOnOff: boolean | null
    tueOnOff: boolean | null
    wedOnOff: boolean | null
    thursOnOff: boolean | null
    friOnOff: boolean | null
    satOnOff: boolean | null
    sunOnOff: boolean | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type OpenCloseBooleanCountAggregateOutputType = {
    id: number
    monOnOff: number
    tueOnOff: number
    wedOnOff: number
    thursOnOff: number
    friOnOff: number
    satOnOff: number
    sunOnOff: number
    coWorkId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type OpenCloseBooleanAvgAggregateInputType = {
    id?: true
    coWorkId?: true
  }

  export type OpenCloseBooleanSumAggregateInputType = {
    id?: true
    coWorkId?: true
  }

  export type OpenCloseBooleanMinAggregateInputType = {
    id?: true
    monOnOff?: true
    tueOnOff?: true
    wedOnOff?: true
    thursOnOff?: true
    friOnOff?: true
    satOnOff?: true
    sunOnOff?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type OpenCloseBooleanMaxAggregateInputType = {
    id?: true
    monOnOff?: true
    tueOnOff?: true
    wedOnOff?: true
    thursOnOff?: true
    friOnOff?: true
    satOnOff?: true
    sunOnOff?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type OpenCloseBooleanCountAggregateInputType = {
    id?: true
    monOnOff?: true
    tueOnOff?: true
    wedOnOff?: true
    thursOnOff?: true
    friOnOff?: true
    satOnOff?: true
    sunOnOff?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type OpenCloseBooleanAggregateArgs = {
    /**
     * Filter which OpenCloseBoolean to aggregate.
     */
    where?: OpenCloseBooleanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenCloseBooleans to fetch.
     */
    orderBy?: Enumerable<OpenCloseBooleanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpenCloseBooleanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenCloseBooleans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenCloseBooleans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpenCloseBooleans
    **/
    _count?: true | OpenCloseBooleanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpenCloseBooleanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpenCloseBooleanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpenCloseBooleanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpenCloseBooleanMaxAggregateInputType
  }

  export type GetOpenCloseBooleanAggregateType<T extends OpenCloseBooleanAggregateArgs> = {
        [P in keyof T & keyof AggregateOpenCloseBoolean]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpenCloseBoolean[P]>
      : GetScalarType<T[P], AggregateOpenCloseBoolean[P]>
  }




  export type OpenCloseBooleanGroupByArgs = {
    where?: OpenCloseBooleanWhereInput
    orderBy?: Enumerable<OpenCloseBooleanOrderByWithAggregationInput>
    by: OpenCloseBooleanScalarFieldEnum[]
    having?: OpenCloseBooleanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpenCloseBooleanCountAggregateInputType | true
    _avg?: OpenCloseBooleanAvgAggregateInputType
    _sum?: OpenCloseBooleanSumAggregateInputType
    _min?: OpenCloseBooleanMinAggregateInputType
    _max?: OpenCloseBooleanMaxAggregateInputType
  }


  export type OpenCloseBooleanGroupByOutputType = {
    id: number
    monOnOff: boolean
    tueOnOff: boolean
    wedOnOff: boolean
    thursOnOff: boolean
    friOnOff: boolean
    satOnOff: boolean
    sunOnOff: boolean
    coWorkId: number
    createAt: Date
    updateAt: Date
    _count: OpenCloseBooleanCountAggregateOutputType | null
    _avg: OpenCloseBooleanAvgAggregateOutputType | null
    _sum: OpenCloseBooleanSumAggregateOutputType | null
    _min: OpenCloseBooleanMinAggregateOutputType | null
    _max: OpenCloseBooleanMaxAggregateOutputType | null
  }

  type GetOpenCloseBooleanGroupByPayload<T extends OpenCloseBooleanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OpenCloseBooleanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpenCloseBooleanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpenCloseBooleanGroupByOutputType[P]>
            : GetScalarType<T[P], OpenCloseBooleanGroupByOutputType[P]>
        }
      >
    >


  export type OpenCloseBooleanSelect = {
    id?: boolean
    monOnOff?: boolean
    tueOnOff?: boolean
    wedOnOff?: boolean
    thursOnOff?: boolean
    friOnOff?: boolean
    satOnOff?: boolean
    sunOnOff?: boolean
    coWorkId?: boolean
    createAt?: boolean
    updateAt?: boolean
    cowork?: boolean | CoWorkArgs
  }


  export type OpenCloseBooleanInclude = {
    cowork?: boolean | CoWorkArgs
  }

  export type OpenCloseBooleanGetPayload<S extends boolean | null | undefined | OpenCloseBooleanArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OpenCloseBoolean :
    S extends undefined ? never :
    S extends { include: any } & (OpenCloseBooleanArgs | OpenCloseBooleanFindManyArgs)
    ? OpenCloseBoolean  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cowork' ? CoWorkGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OpenCloseBooleanArgs | OpenCloseBooleanFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cowork' ? CoWorkGetPayload<S['select'][P]> :  P extends keyof OpenCloseBoolean ? OpenCloseBoolean[P] : never
  } 
      : OpenCloseBoolean


  type OpenCloseBooleanCountArgs = 
    Omit<OpenCloseBooleanFindManyArgs, 'select' | 'include'> & {
      select?: OpenCloseBooleanCountAggregateInputType | true
    }

  export interface OpenCloseBooleanDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OpenCloseBoolean that matches the filter.
     * @param {OpenCloseBooleanFindUniqueArgs} args - Arguments to find a OpenCloseBoolean
     * @example
     * // Get one OpenCloseBoolean
     * const openCloseBoolean = await prisma.openCloseBoolean.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OpenCloseBooleanFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OpenCloseBooleanFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OpenCloseBoolean'> extends True ? Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T>> : Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T> | null, null>

    /**
     * Find one OpenCloseBoolean that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OpenCloseBooleanFindUniqueOrThrowArgs} args - Arguments to find a OpenCloseBoolean
     * @example
     * // Get one OpenCloseBoolean
     * const openCloseBoolean = await prisma.openCloseBoolean.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OpenCloseBooleanFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OpenCloseBooleanFindUniqueOrThrowArgs>
    ): Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T>>

    /**
     * Find the first OpenCloseBoolean that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseBooleanFindFirstArgs} args - Arguments to find a OpenCloseBoolean
     * @example
     * // Get one OpenCloseBoolean
     * const openCloseBoolean = await prisma.openCloseBoolean.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OpenCloseBooleanFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OpenCloseBooleanFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OpenCloseBoolean'> extends True ? Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T>> : Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T> | null, null>

    /**
     * Find the first OpenCloseBoolean that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseBooleanFindFirstOrThrowArgs} args - Arguments to find a OpenCloseBoolean
     * @example
     * // Get one OpenCloseBoolean
     * const openCloseBoolean = await prisma.openCloseBoolean.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OpenCloseBooleanFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OpenCloseBooleanFindFirstOrThrowArgs>
    ): Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T>>

    /**
     * Find zero or more OpenCloseBooleans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseBooleanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpenCloseBooleans
     * const openCloseBooleans = await prisma.openCloseBoolean.findMany()
     * 
     * // Get first 10 OpenCloseBooleans
     * const openCloseBooleans = await prisma.openCloseBoolean.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openCloseBooleanWithIdOnly = await prisma.openCloseBoolean.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OpenCloseBooleanFindManyArgs>(
      args?: SelectSubset<T, OpenCloseBooleanFindManyArgs>
    ): Prisma.PrismaPromise<Array<OpenCloseBooleanGetPayload<T>>>

    /**
     * Create a OpenCloseBoolean.
     * @param {OpenCloseBooleanCreateArgs} args - Arguments to create a OpenCloseBoolean.
     * @example
     * // Create one OpenCloseBoolean
     * const OpenCloseBoolean = await prisma.openCloseBoolean.create({
     *   data: {
     *     // ... data to create a OpenCloseBoolean
     *   }
     * })
     * 
    **/
    create<T extends OpenCloseBooleanCreateArgs>(
      args: SelectSubset<T, OpenCloseBooleanCreateArgs>
    ): Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T>>

    /**
     * Create many OpenCloseBooleans.
     *     @param {OpenCloseBooleanCreateManyArgs} args - Arguments to create many OpenCloseBooleans.
     *     @example
     *     // Create many OpenCloseBooleans
     *     const openCloseBoolean = await prisma.openCloseBoolean.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OpenCloseBooleanCreateManyArgs>(
      args?: SelectSubset<T, OpenCloseBooleanCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OpenCloseBoolean.
     * @param {OpenCloseBooleanDeleteArgs} args - Arguments to delete one OpenCloseBoolean.
     * @example
     * // Delete one OpenCloseBoolean
     * const OpenCloseBoolean = await prisma.openCloseBoolean.delete({
     *   where: {
     *     // ... filter to delete one OpenCloseBoolean
     *   }
     * })
     * 
    **/
    delete<T extends OpenCloseBooleanDeleteArgs>(
      args: SelectSubset<T, OpenCloseBooleanDeleteArgs>
    ): Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T>>

    /**
     * Update one OpenCloseBoolean.
     * @param {OpenCloseBooleanUpdateArgs} args - Arguments to update one OpenCloseBoolean.
     * @example
     * // Update one OpenCloseBoolean
     * const openCloseBoolean = await prisma.openCloseBoolean.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OpenCloseBooleanUpdateArgs>(
      args: SelectSubset<T, OpenCloseBooleanUpdateArgs>
    ): Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T>>

    /**
     * Delete zero or more OpenCloseBooleans.
     * @param {OpenCloseBooleanDeleteManyArgs} args - Arguments to filter OpenCloseBooleans to delete.
     * @example
     * // Delete a few OpenCloseBooleans
     * const { count } = await prisma.openCloseBoolean.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OpenCloseBooleanDeleteManyArgs>(
      args?: SelectSubset<T, OpenCloseBooleanDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpenCloseBooleans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseBooleanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpenCloseBooleans
     * const openCloseBoolean = await prisma.openCloseBoolean.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OpenCloseBooleanUpdateManyArgs>(
      args: SelectSubset<T, OpenCloseBooleanUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OpenCloseBoolean.
     * @param {OpenCloseBooleanUpsertArgs} args - Arguments to update or create a OpenCloseBoolean.
     * @example
     * // Update or create a OpenCloseBoolean
     * const openCloseBoolean = await prisma.openCloseBoolean.upsert({
     *   create: {
     *     // ... data to create a OpenCloseBoolean
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpenCloseBoolean we want to update
     *   }
     * })
    **/
    upsert<T extends OpenCloseBooleanUpsertArgs>(
      args: SelectSubset<T, OpenCloseBooleanUpsertArgs>
    ): Prisma__OpenCloseBooleanClient<OpenCloseBooleanGetPayload<T>>

    /**
     * Count the number of OpenCloseBooleans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseBooleanCountArgs} args - Arguments to filter OpenCloseBooleans to count.
     * @example
     * // Count the number of OpenCloseBooleans
     * const count = await prisma.openCloseBoolean.count({
     *   where: {
     *     // ... the filter for the OpenCloseBooleans we want to count
     *   }
     * })
    **/
    count<T extends OpenCloseBooleanCountArgs>(
      args?: Subset<T, OpenCloseBooleanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpenCloseBooleanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpenCloseBoolean.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseBooleanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpenCloseBooleanAggregateArgs>(args: Subset<T, OpenCloseBooleanAggregateArgs>): Prisma.PrismaPromise<GetOpenCloseBooleanAggregateType<T>>

    /**
     * Group by OpenCloseBoolean.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseBooleanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpenCloseBooleanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpenCloseBooleanGroupByArgs['orderBy'] }
        : { orderBy?: OpenCloseBooleanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpenCloseBooleanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpenCloseBooleanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OpenCloseBoolean.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OpenCloseBooleanClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cowork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * OpenCloseBoolean base type for findUnique actions
   */
  export type OpenCloseBooleanFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * Filter, which OpenCloseBoolean to fetch.
     */
    where: OpenCloseBooleanWhereUniqueInput
  }

  /**
   * OpenCloseBoolean findUnique
   */
  export interface OpenCloseBooleanFindUniqueArgs extends OpenCloseBooleanFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OpenCloseBoolean findUniqueOrThrow
   */
  export type OpenCloseBooleanFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * Filter, which OpenCloseBoolean to fetch.
     */
    where: OpenCloseBooleanWhereUniqueInput
  }


  /**
   * OpenCloseBoolean base type for findFirst actions
   */
  export type OpenCloseBooleanFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * Filter, which OpenCloseBoolean to fetch.
     */
    where?: OpenCloseBooleanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenCloseBooleans to fetch.
     */
    orderBy?: Enumerable<OpenCloseBooleanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenCloseBooleans.
     */
    cursor?: OpenCloseBooleanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenCloseBooleans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenCloseBooleans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenCloseBooleans.
     */
    distinct?: Enumerable<OpenCloseBooleanScalarFieldEnum>
  }

  /**
   * OpenCloseBoolean findFirst
   */
  export interface OpenCloseBooleanFindFirstArgs extends OpenCloseBooleanFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OpenCloseBoolean findFirstOrThrow
   */
  export type OpenCloseBooleanFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * Filter, which OpenCloseBoolean to fetch.
     */
    where?: OpenCloseBooleanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenCloseBooleans to fetch.
     */
    orderBy?: Enumerable<OpenCloseBooleanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenCloseBooleans.
     */
    cursor?: OpenCloseBooleanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenCloseBooleans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenCloseBooleans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenCloseBooleans.
     */
    distinct?: Enumerable<OpenCloseBooleanScalarFieldEnum>
  }


  /**
   * OpenCloseBoolean findMany
   */
  export type OpenCloseBooleanFindManyArgs = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * Filter, which OpenCloseBooleans to fetch.
     */
    where?: OpenCloseBooleanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenCloseBooleans to fetch.
     */
    orderBy?: Enumerable<OpenCloseBooleanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpenCloseBooleans.
     */
    cursor?: OpenCloseBooleanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenCloseBooleans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenCloseBooleans.
     */
    skip?: number
    distinct?: Enumerable<OpenCloseBooleanScalarFieldEnum>
  }


  /**
   * OpenCloseBoolean create
   */
  export type OpenCloseBooleanCreateArgs = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * The data needed to create a OpenCloseBoolean.
     */
    data: XOR<OpenCloseBooleanCreateInput, OpenCloseBooleanUncheckedCreateInput>
  }


  /**
   * OpenCloseBoolean createMany
   */
  export type OpenCloseBooleanCreateManyArgs = {
    /**
     * The data used to create many OpenCloseBooleans.
     */
    data: Enumerable<OpenCloseBooleanCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OpenCloseBoolean update
   */
  export type OpenCloseBooleanUpdateArgs = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * The data needed to update a OpenCloseBoolean.
     */
    data: XOR<OpenCloseBooleanUpdateInput, OpenCloseBooleanUncheckedUpdateInput>
    /**
     * Choose, which OpenCloseBoolean to update.
     */
    where: OpenCloseBooleanWhereUniqueInput
  }


  /**
   * OpenCloseBoolean updateMany
   */
  export type OpenCloseBooleanUpdateManyArgs = {
    /**
     * The data used to update OpenCloseBooleans.
     */
    data: XOR<OpenCloseBooleanUpdateManyMutationInput, OpenCloseBooleanUncheckedUpdateManyInput>
    /**
     * Filter which OpenCloseBooleans to update
     */
    where?: OpenCloseBooleanWhereInput
  }


  /**
   * OpenCloseBoolean upsert
   */
  export type OpenCloseBooleanUpsertArgs = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * The filter to search for the OpenCloseBoolean to update in case it exists.
     */
    where: OpenCloseBooleanWhereUniqueInput
    /**
     * In case the OpenCloseBoolean found by the `where` argument doesn't exist, create a new OpenCloseBoolean with this data.
     */
    create: XOR<OpenCloseBooleanCreateInput, OpenCloseBooleanUncheckedCreateInput>
    /**
     * In case the OpenCloseBoolean was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpenCloseBooleanUpdateInput, OpenCloseBooleanUncheckedUpdateInput>
  }


  /**
   * OpenCloseBoolean delete
   */
  export type OpenCloseBooleanDeleteArgs = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
    /**
     * Filter which OpenCloseBoolean to delete.
     */
    where: OpenCloseBooleanWhereUniqueInput
  }


  /**
   * OpenCloseBoolean deleteMany
   */
  export type OpenCloseBooleanDeleteManyArgs = {
    /**
     * Filter which OpenCloseBooleans to delete
     */
    where?: OpenCloseBooleanWhereInput
  }


  /**
   * OpenCloseBoolean without action
   */
  export type OpenCloseBooleanArgs = {
    /**
     * Select specific fields to fetch from the OpenCloseBoolean
     */
    select?: OpenCloseBooleanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseBooleanInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BookRoomScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    roomId: 'roomId',
    roomRateId: 'roomRateId',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt',
    userExternalId: 'userExternalId',
    vertifyBookingCodeId: 'vertifyBookingCodeId',
    price: 'price'
  };

  export type BookRoomScalarFieldEnum = (typeof BookRoomScalarFieldEnum)[keyof typeof BookRoomScalarFieldEnum]


  export const BranchToRoomScalarFieldEnum: {
    id: 'id',
    coWorkId: 'coWorkId',
    roomId: 'roomId',
    createAt: 'createAt',
    updateAt: 'updateAt',
    active: 'active'
  };

  export type BranchToRoomScalarFieldEnum = (typeof BranchToRoomScalarFieldEnum)[keyof typeof BranchToRoomScalarFieldEnum]


  export const CloseScalarFieldEnum: {
    id: 'id',
    monClose: 'monClose',
    tueClose: 'tueClose',
    wedClose: 'wedClose',
    thursClose: 'thursClose',
    friClose: 'friClose',
    satClose: 'satClose',
    sunClose: 'sunClose',
    coWorkId: 'coWorkId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CloseScalarFieldEnum = (typeof CloseScalarFieldEnum)[keyof typeof CloseScalarFieldEnum]


  export const CoWorkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    location: 'location',
    tel: 'tel',
    picture: 'picture',
    userInternalId: 'userInternalId'
  };

  export type CoWorkScalarFieldEnum = (typeof CoWorkScalarFieldEnum)[keyof typeof CoWorkScalarFieldEnum]


  export const DurationCategoryScalarFieldEnum: {
    id: 'id',
    duration: 'duration',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DurationCategoryScalarFieldEnum = (typeof DurationCategoryScalarFieldEnum)[keyof typeof DurationCategoryScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const FacilityToCoWorkScalarFieldEnum: {
    id: 'id',
    coWorkId: 'coWorkId',
    facilityId: 'facilityId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type FacilityToCoWorkScalarFieldEnum = (typeof FacilityToCoWorkScalarFieldEnum)[keyof typeof FacilityToCoWorkScalarFieldEnum]


  export const OpenClose24HoursScalarFieldEnum: {
    id: 'id',
    mon24hours: 'mon24hours',
    tue24hours: 'tue24hours',
    wed24hours: 'wed24hours',
    thurs24hours: 'thurs24hours',
    fri24hours: 'fri24hours',
    sat24hours: 'sat24hours',
    sun24hours: 'sun24hours',
    coWorkId: 'coWorkId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type OpenClose24HoursScalarFieldEnum = (typeof OpenClose24HoursScalarFieldEnum)[keyof typeof OpenClose24HoursScalarFieldEnum]


  export const OpenCloseBooleanScalarFieldEnum: {
    id: 'id',
    monOnOff: 'monOnOff',
    tueOnOff: 'tueOnOff',
    wedOnOff: 'wedOnOff',
    thursOnOff: 'thursOnOff',
    friOnOff: 'friOnOff',
    satOnOff: 'satOnOff',
    sunOnOff: 'sunOnOff',
    coWorkId: 'coWorkId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type OpenCloseBooleanScalarFieldEnum = (typeof OpenCloseBooleanScalarFieldEnum)[keyof typeof OpenCloseBooleanScalarFieldEnum]


  export const OpenScalarFieldEnum: {
    id: 'id',
    monOpen: 'monOpen',
    tueOpen: 'tueOpen',
    wedOpen: 'wedOpen',
    thursOpen: 'thursOpen',
    friOpen: 'friOpen',
    satOpen: 'satOpen',
    sunOpen: 'sunOpen',
    coWorkId: 'coWorkId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type OpenScalarFieldEnum = (typeof OpenScalarFieldEnum)[keyof typeof OpenScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoomRateScalarFieldEnum: {
    id: 'id',
    price: 'price',
    createAt: 'createAt',
    updateAt: 'updateAt',
    durationCategoryId: 'durationCategoryId',
    roomId: 'roomId',
    active: 'active'
  };

  export type RoomRateScalarFieldEnum = (typeof RoomRateScalarFieldEnum)[keyof typeof RoomRateScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserExternalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    tel: 'tel',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserExternalScalarFieldEnum = (typeof UserExternalScalarFieldEnum)[keyof typeof UserExternalScalarFieldEnum]


  export const UserInternalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    tel: 'tel',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserInternalScalarFieldEnum = (typeof UserInternalScalarFieldEnum)[keyof typeof UserInternalScalarFieldEnum]


  export const VertifyBookingCodeScalarFieldEnum: {
    id: 'id',
    verifyCode: 'verifyCode',
    bookdate: 'bookdate',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type VertifyBookingCodeScalarFieldEnum = (typeof VertifyBookingCodeScalarFieldEnum)[keyof typeof VertifyBookingCodeScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserExternalWhereInput = {
    AND?: Enumerable<UserExternalWhereInput>
    OR?: Enumerable<UserExternalWhereInput>
    NOT?: Enumerable<UserExternalWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    tel?: StringFilter | string
    password?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    BookRoom?: BookRoomListRelationFilter
  }

  export type UserExternalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    BookRoom?: BookRoomOrderByRelationAggregateInput
  }

  export type UserExternalWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserExternalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserExternalCountOrderByAggregateInput
    _avg?: UserExternalAvgOrderByAggregateInput
    _max?: UserExternalMaxOrderByAggregateInput
    _min?: UserExternalMinOrderByAggregateInput
    _sum?: UserExternalSumOrderByAggregateInput
  }

  export type UserExternalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserExternalScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserExternalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserExternalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    password?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CoWorkWhereInput = {
    AND?: Enumerable<CoWorkWhereInput>
    OR?: Enumerable<CoWorkWhereInput>
    NOT?: Enumerable<CoWorkWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    location?: StringFilter | string
    tel?: StringFilter | string
    picture?: StringFilter | string
    userInternalId?: IntNullableFilter | number | null
    BranchToRoom?: BranchToRoomListRelationFilter
    FacilityToCoWork?: FacilityToCoWorkListRelationFilter
    userInternal?: XOR<UserInternalRelationFilter, UserInternalWhereInput> | null
    Close?: XOR<CloseRelationFilter, CloseWhereInput> | null
    Open?: XOR<OpenRelationFilter, OpenWhereInput> | null
    OpenClose24Hours?: XOR<OpenClose24HoursRelationFilter, OpenClose24HoursWhereInput> | null
    OpenCloseBoolean?: XOR<OpenCloseBooleanRelationFilter, OpenCloseBooleanWhereInput> | null
  }

  export type CoWorkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
    BranchToRoom?: BranchToRoomOrderByRelationAggregateInput
    FacilityToCoWork?: FacilityToCoWorkOrderByRelationAggregateInput
    userInternal?: UserInternalOrderByWithRelationInput
    Close?: CloseOrderByWithRelationInput
    Open?: OpenOrderByWithRelationInput
    OpenClose24Hours?: OpenClose24HoursOrderByWithRelationInput
    OpenCloseBoolean?: OpenCloseBooleanOrderByWithRelationInput
  }

  export type CoWorkWhereUniqueInput = {
    id?: number
    userInternalId?: number
  }

  export type CoWorkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
    _count?: CoWorkCountOrderByAggregateInput
    _avg?: CoWorkAvgOrderByAggregateInput
    _max?: CoWorkMaxOrderByAggregateInput
    _min?: CoWorkMinOrderByAggregateInput
    _sum?: CoWorkSumOrderByAggregateInput
  }

  export type CoWorkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CoWorkScalarWhereWithAggregatesInput>
    OR?: Enumerable<CoWorkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CoWorkScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    location?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    picture?: StringWithAggregatesFilter | string
    userInternalId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserInternalWhereInput = {
    AND?: Enumerable<UserInternalWhereInput>
    OR?: Enumerable<UserInternalWhereInput>
    NOT?: Enumerable<UserInternalWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    tel?: StringFilter | string
    password?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    coWork?: XOR<CoWorkRelationFilter, CoWorkWhereInput> | null
  }

  export type UserInternalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    coWork?: CoWorkOrderByWithRelationInput
  }

  export type UserInternalWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserInternalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserInternalCountOrderByAggregateInput
    _avg?: UserInternalAvgOrderByAggregateInput
    _max?: UserInternalMaxOrderByAggregateInput
    _min?: UserInternalMinOrderByAggregateInput
    _sum?: UserInternalSumOrderByAggregateInput
  }

  export type UserInternalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserInternalScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserInternalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserInternalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoomWhereInput = {
    AND?: Enumerable<RoomWhereInput>
    OR?: Enumerable<RoomWhereInput>
    NOT?: Enumerable<RoomWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    capacity?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    BranchToRoom?: XOR<BranchToRoomRelationFilter, BranchToRoomWhereInput> | null
    RoomRate?: RoomRateListRelationFilter
    BookRoom?: BookRoomListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    BranchToRoom?: BranchToRoomOrderByWithRelationInput
    RoomRate?: RoomRateOrderByRelationAggregateInput
    BookRoom?: BookRoomOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = {
    id?: number
  }

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoomScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    capacity?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoomRateWhereInput = {
    AND?: Enumerable<RoomRateWhereInput>
    OR?: Enumerable<RoomRateWhereInput>
    NOT?: Enumerable<RoomRateWhereInput>
    id?: IntFilter | number
    price?: IntNullableFilter | number | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    durationCategoryId?: IntFilter | number
    roomId?: IntNullableFilter | number | null
    active?: BoolNullableFilter | boolean | null
    BookRoom?: BookRoomListRelationFilter
    duration?: XOR<DurationCategoryRelationFilter, durationCategoryWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput> | null
  }

  export type RoomRateOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    durationCategoryId?: SortOrder
    roomId?: SortOrder
    active?: SortOrder
    BookRoom?: BookRoomOrderByRelationAggregateInput
    duration?: durationCategoryOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type RoomRateWhereUniqueInput = {
    id?: number
  }

  export type RoomRateOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    durationCategoryId?: SortOrder
    roomId?: SortOrder
    active?: SortOrder
    _count?: RoomRateCountOrderByAggregateInput
    _avg?: RoomRateAvgOrderByAggregateInput
    _max?: RoomRateMaxOrderByAggregateInput
    _min?: RoomRateMinOrderByAggregateInput
    _sum?: RoomRateSumOrderByAggregateInput
  }

  export type RoomRateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoomRateScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoomRateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoomRateScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    price?: IntNullableWithAggregatesFilter | number | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    durationCategoryId?: IntWithAggregatesFilter | number
    roomId?: IntNullableWithAggregatesFilter | number | null
    active?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type durationCategoryWhereInput = {
    AND?: Enumerable<durationCategoryWhereInput>
    OR?: Enumerable<durationCategoryWhereInput>
    NOT?: Enumerable<durationCategoryWhereInput>
    id?: IntFilter | number
    duration?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    RoomRate?: RoomRateListRelationFilter
  }

  export type durationCategoryOrderByWithRelationInput = {
    id?: SortOrder
    duration?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    RoomRate?: RoomRateOrderByRelationAggregateInput
  }

  export type durationCategoryWhereUniqueInput = {
    id?: number
    duration?: number
  }

  export type durationCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    duration?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: durationCategoryCountOrderByAggregateInput
    _avg?: durationCategoryAvgOrderByAggregateInput
    _max?: durationCategoryMaxOrderByAggregateInput
    _min?: durationCategoryMinOrderByAggregateInput
    _sum?: durationCategorySumOrderByAggregateInput
  }

  export type durationCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<durationCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<durationCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<durationCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    duration?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FacilityWhereInput = {
    AND?: Enumerable<FacilityWhereInput>
    OR?: Enumerable<FacilityWhereInput>
    NOT?: Enumerable<FacilityWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    FacilityToCoWork?: FacilityToCoWorkListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    FacilityToCoWork?: FacilityToCoWorkOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = {
    id?: number
  }

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _avg?: FacilityAvgOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
    _sum?: FacilitySumOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    OR?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FacilityToCoWorkWhereInput = {
    AND?: Enumerable<FacilityToCoWorkWhereInput>
    OR?: Enumerable<FacilityToCoWorkWhereInput>
    NOT?: Enumerable<FacilityToCoWorkWhereInput>
    id?: IntFilter | number
    coWorkId?: IntFilter | number
    facilityId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    coWork?: XOR<CoWorkRelationFilter, CoWorkWhereInput>
    facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
  }

  export type FacilityToCoWorkOrderByWithRelationInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    coWork?: CoWorkOrderByWithRelationInput
    facility?: FacilityOrderByWithRelationInput
  }

  export type FacilityToCoWorkWhereUniqueInput = {
    id?: number
  }

  export type FacilityToCoWorkOrderByWithAggregationInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: FacilityToCoWorkCountOrderByAggregateInput
    _avg?: FacilityToCoWorkAvgOrderByAggregateInput
    _max?: FacilityToCoWorkMaxOrderByAggregateInput
    _min?: FacilityToCoWorkMinOrderByAggregateInput
    _sum?: FacilityToCoWorkSumOrderByAggregateInput
  }

  export type FacilityToCoWorkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FacilityToCoWorkScalarWhereWithAggregatesInput>
    OR?: Enumerable<FacilityToCoWorkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FacilityToCoWorkScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    coWorkId?: IntWithAggregatesFilter | number
    facilityId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BranchToRoomWhereInput = {
    AND?: Enumerable<BranchToRoomWhereInput>
    OR?: Enumerable<BranchToRoomWhereInput>
    NOT?: Enumerable<BranchToRoomWhereInput>
    id?: IntFilter | number
    coWorkId?: IntFilter | number
    roomId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    active?: BoolNullableFilter | boolean | null
    coWork?: XOR<CoWorkRelationFilter, CoWorkWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }

  export type BranchToRoomOrderByWithRelationInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    active?: SortOrder
    coWork?: CoWorkOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type BranchToRoomWhereUniqueInput = {
    id?: number
    roomId?: number
  }

  export type BranchToRoomOrderByWithAggregationInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    active?: SortOrder
    _count?: BranchToRoomCountOrderByAggregateInput
    _avg?: BranchToRoomAvgOrderByAggregateInput
    _max?: BranchToRoomMaxOrderByAggregateInput
    _min?: BranchToRoomMinOrderByAggregateInput
    _sum?: BranchToRoomSumOrderByAggregateInput
  }

  export type BranchToRoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BranchToRoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<BranchToRoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BranchToRoomScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    coWorkId?: IntWithAggregatesFilter | number
    roomId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    active?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type BookRoomWhereInput = {
    AND?: Enumerable<BookRoomWhereInput>
    OR?: Enumerable<BookRoomWhereInput>
    NOT?: Enumerable<BookRoomWhereInput>
    id?: IntFilter | number
    startTime?: DateTimeFilter | Date | string
    roomId?: IntNullableFilter | number | null
    roomRateId?: IntFilter | number
    status?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    userExternalId?: IntFilter | number
    vertifyBookingCodeId?: IntFilter | number
    price?: IntNullableFilter | number | null
    room?: XOR<RoomRelationFilter, RoomWhereInput> | null
    roomRate?: XOR<RoomRateRelationFilter, RoomRateWhereInput>
    UserExternal?: XOR<UserExternalRelationFilter, UserExternalWhereInput>
    vertifyCode?: XOR<VertifyBookingCodeRelationFilter, VertifyBookingCodeWhereInput>
  }

  export type BookRoomOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    roomId?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    price?: SortOrder
    room?: RoomOrderByWithRelationInput
    roomRate?: RoomRateOrderByWithRelationInput
    UserExternal?: UserExternalOrderByWithRelationInput
    vertifyCode?: VertifyBookingCodeOrderByWithRelationInput
  }

  export type BookRoomWhereUniqueInput = {
    id?: number
  }

  export type BookRoomOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    roomId?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    price?: SortOrder
    _count?: BookRoomCountOrderByAggregateInput
    _avg?: BookRoomAvgOrderByAggregateInput
    _max?: BookRoomMaxOrderByAggregateInput
    _min?: BookRoomMinOrderByAggregateInput
    _sum?: BookRoomSumOrderByAggregateInput
  }

  export type BookRoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BookRoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookRoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookRoomScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    startTime?: DateTimeWithAggregatesFilter | Date | string
    roomId?: IntNullableWithAggregatesFilter | number | null
    roomRateId?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    userExternalId?: IntWithAggregatesFilter | number
    vertifyBookingCodeId?: IntWithAggregatesFilter | number
    price?: IntNullableWithAggregatesFilter | number | null
  }

  export type VertifyBookingCodeWhereInput = {
    AND?: Enumerable<VertifyBookingCodeWhereInput>
    OR?: Enumerable<VertifyBookingCodeWhereInput>
    NOT?: Enumerable<VertifyBookingCodeWhereInput>
    id?: IntFilter | number
    verifyCode?: StringFilter | string
    bookdate?: DateTimeFilter | Date | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    bookRoom?: BookRoomListRelationFilter
  }

  export type VertifyBookingCodeOrderByWithRelationInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    bookRoom?: BookRoomOrderByRelationAggregateInput
  }

  export type VertifyBookingCodeWhereUniqueInput = {
    id?: number
  }

  export type VertifyBookingCodeOrderByWithAggregationInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: VertifyBookingCodeCountOrderByAggregateInput
    _avg?: VertifyBookingCodeAvgOrderByAggregateInput
    _max?: VertifyBookingCodeMaxOrderByAggregateInput
    _min?: VertifyBookingCodeMinOrderByAggregateInput
    _sum?: VertifyBookingCodeSumOrderByAggregateInput
  }

  export type VertifyBookingCodeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VertifyBookingCodeScalarWhereWithAggregatesInput>
    OR?: Enumerable<VertifyBookingCodeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VertifyBookingCodeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    verifyCode?: StringWithAggregatesFilter | string
    bookdate?: DateTimeWithAggregatesFilter | Date | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OpenWhereInput = {
    AND?: Enumerable<OpenWhereInput>
    OR?: Enumerable<OpenWhereInput>
    NOT?: Enumerable<OpenWhereInput>
    id?: IntFilter | number
    monOpen?: IntFilter | number
    tueOpen?: IntFilter | number
    wedOpen?: IntFilter | number
    thursOpen?: IntFilter | number
    friOpen?: IntFilter | number
    satOpen?: IntFilter | number
    sunOpen?: IntFilter | number
    coWorkId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    cowork?: XOR<CoWorkRelationFilter, CoWorkWhereInput>
  }

  export type OpenOrderByWithRelationInput = {
    id?: SortOrder
    monOpen?: SortOrder
    tueOpen?: SortOrder
    wedOpen?: SortOrder
    thursOpen?: SortOrder
    friOpen?: SortOrder
    satOpen?: SortOrder
    sunOpen?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    cowork?: CoWorkOrderByWithRelationInput
  }

  export type OpenWhereUniqueInput = {
    id?: number
    coWorkId?: number
  }

  export type OpenOrderByWithAggregationInput = {
    id?: SortOrder
    monOpen?: SortOrder
    tueOpen?: SortOrder
    wedOpen?: SortOrder
    thursOpen?: SortOrder
    friOpen?: SortOrder
    satOpen?: SortOrder
    sunOpen?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: OpenCountOrderByAggregateInput
    _avg?: OpenAvgOrderByAggregateInput
    _max?: OpenMaxOrderByAggregateInput
    _min?: OpenMinOrderByAggregateInput
    _sum?: OpenSumOrderByAggregateInput
  }

  export type OpenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OpenScalarWhereWithAggregatesInput>
    OR?: Enumerable<OpenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OpenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    monOpen?: IntWithAggregatesFilter | number
    tueOpen?: IntWithAggregatesFilter | number
    wedOpen?: IntWithAggregatesFilter | number
    thursOpen?: IntWithAggregatesFilter | number
    friOpen?: IntWithAggregatesFilter | number
    satOpen?: IntWithAggregatesFilter | number
    sunOpen?: IntWithAggregatesFilter | number
    coWorkId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CloseWhereInput = {
    AND?: Enumerable<CloseWhereInput>
    OR?: Enumerable<CloseWhereInput>
    NOT?: Enumerable<CloseWhereInput>
    id?: IntFilter | number
    monClose?: IntFilter | number
    tueClose?: IntFilter | number
    wedClose?: IntFilter | number
    thursClose?: IntFilter | number
    friClose?: IntFilter | number
    satClose?: IntFilter | number
    sunClose?: IntFilter | number
    coWorkId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    cowork?: XOR<CoWorkRelationFilter, CoWorkWhereInput>
  }

  export type CloseOrderByWithRelationInput = {
    id?: SortOrder
    monClose?: SortOrder
    tueClose?: SortOrder
    wedClose?: SortOrder
    thursClose?: SortOrder
    friClose?: SortOrder
    satClose?: SortOrder
    sunClose?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    cowork?: CoWorkOrderByWithRelationInput
  }

  export type CloseWhereUniqueInput = {
    id?: number
    coWorkId?: number
  }

  export type CloseOrderByWithAggregationInput = {
    id?: SortOrder
    monClose?: SortOrder
    tueClose?: SortOrder
    wedClose?: SortOrder
    thursClose?: SortOrder
    friClose?: SortOrder
    satClose?: SortOrder
    sunClose?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CloseCountOrderByAggregateInput
    _avg?: CloseAvgOrderByAggregateInput
    _max?: CloseMaxOrderByAggregateInput
    _min?: CloseMinOrderByAggregateInput
    _sum?: CloseSumOrderByAggregateInput
  }

  export type CloseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CloseScalarWhereWithAggregatesInput>
    OR?: Enumerable<CloseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CloseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    monClose?: IntWithAggregatesFilter | number
    tueClose?: IntWithAggregatesFilter | number
    wedClose?: IntWithAggregatesFilter | number
    thursClose?: IntWithAggregatesFilter | number
    friClose?: IntWithAggregatesFilter | number
    satClose?: IntWithAggregatesFilter | number
    sunClose?: IntWithAggregatesFilter | number
    coWorkId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OpenClose24HoursWhereInput = {
    AND?: Enumerable<OpenClose24HoursWhereInput>
    OR?: Enumerable<OpenClose24HoursWhereInput>
    NOT?: Enumerable<OpenClose24HoursWhereInput>
    id?: IntFilter | number
    mon24hours?: BoolFilter | boolean
    tue24hours?: BoolFilter | boolean
    wed24hours?: BoolFilter | boolean
    thurs24hours?: BoolFilter | boolean
    fri24hours?: BoolFilter | boolean
    sat24hours?: BoolFilter | boolean
    sun24hours?: BoolFilter | boolean
    coWorkId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    cowork?: XOR<CoWorkRelationFilter, CoWorkWhereInput>
  }

  export type OpenClose24HoursOrderByWithRelationInput = {
    id?: SortOrder
    mon24hours?: SortOrder
    tue24hours?: SortOrder
    wed24hours?: SortOrder
    thurs24hours?: SortOrder
    fri24hours?: SortOrder
    sat24hours?: SortOrder
    sun24hours?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    cowork?: CoWorkOrderByWithRelationInput
  }

  export type OpenClose24HoursWhereUniqueInput = {
    id?: number
    coWorkId?: number
  }

  export type OpenClose24HoursOrderByWithAggregationInput = {
    id?: SortOrder
    mon24hours?: SortOrder
    tue24hours?: SortOrder
    wed24hours?: SortOrder
    thurs24hours?: SortOrder
    fri24hours?: SortOrder
    sat24hours?: SortOrder
    sun24hours?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: OpenClose24HoursCountOrderByAggregateInput
    _avg?: OpenClose24HoursAvgOrderByAggregateInput
    _max?: OpenClose24HoursMaxOrderByAggregateInput
    _min?: OpenClose24HoursMinOrderByAggregateInput
    _sum?: OpenClose24HoursSumOrderByAggregateInput
  }

  export type OpenClose24HoursScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OpenClose24HoursScalarWhereWithAggregatesInput>
    OR?: Enumerable<OpenClose24HoursScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OpenClose24HoursScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    mon24hours?: BoolWithAggregatesFilter | boolean
    tue24hours?: BoolWithAggregatesFilter | boolean
    wed24hours?: BoolWithAggregatesFilter | boolean
    thurs24hours?: BoolWithAggregatesFilter | boolean
    fri24hours?: BoolWithAggregatesFilter | boolean
    sat24hours?: BoolWithAggregatesFilter | boolean
    sun24hours?: BoolWithAggregatesFilter | boolean
    coWorkId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OpenCloseBooleanWhereInput = {
    AND?: Enumerable<OpenCloseBooleanWhereInput>
    OR?: Enumerable<OpenCloseBooleanWhereInput>
    NOT?: Enumerable<OpenCloseBooleanWhereInput>
    id?: IntFilter | number
    monOnOff?: BoolFilter | boolean
    tueOnOff?: BoolFilter | boolean
    wedOnOff?: BoolFilter | boolean
    thursOnOff?: BoolFilter | boolean
    friOnOff?: BoolFilter | boolean
    satOnOff?: BoolFilter | boolean
    sunOnOff?: BoolFilter | boolean
    coWorkId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    cowork?: XOR<CoWorkRelationFilter, CoWorkWhereInput>
  }

  export type OpenCloseBooleanOrderByWithRelationInput = {
    id?: SortOrder
    monOnOff?: SortOrder
    tueOnOff?: SortOrder
    wedOnOff?: SortOrder
    thursOnOff?: SortOrder
    friOnOff?: SortOrder
    satOnOff?: SortOrder
    sunOnOff?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    cowork?: CoWorkOrderByWithRelationInput
  }

  export type OpenCloseBooleanWhereUniqueInput = {
    id?: number
    coWorkId?: number
  }

  export type OpenCloseBooleanOrderByWithAggregationInput = {
    id?: SortOrder
    monOnOff?: SortOrder
    tueOnOff?: SortOrder
    wedOnOff?: SortOrder
    thursOnOff?: SortOrder
    friOnOff?: SortOrder
    satOnOff?: SortOrder
    sunOnOff?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: OpenCloseBooleanCountOrderByAggregateInput
    _avg?: OpenCloseBooleanAvgOrderByAggregateInput
    _max?: OpenCloseBooleanMaxOrderByAggregateInput
    _min?: OpenCloseBooleanMinOrderByAggregateInput
    _sum?: OpenCloseBooleanSumOrderByAggregateInput
  }

  export type OpenCloseBooleanScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OpenCloseBooleanScalarWhereWithAggregatesInput>
    OR?: Enumerable<OpenCloseBooleanScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OpenCloseBooleanScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    monOnOff?: BoolWithAggregatesFilter | boolean
    tueOnOff?: BoolWithAggregatesFilter | boolean
    wedOnOff?: BoolWithAggregatesFilter | boolean
    thursOnOff?: BoolWithAggregatesFilter | boolean
    friOnOff?: BoolWithAggregatesFilter | boolean
    satOnOff?: BoolWithAggregatesFilter | boolean
    sunOnOff?: BoolWithAggregatesFilter | boolean
    coWorkId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserExternalCreateInput = {
    name: string
    email: string
    tel: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomCreateNestedManyWithoutUserExternalInput
  }

  export type UserExternalUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    tel: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutUserExternalInput
  }

  export type UserExternalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUpdateManyWithoutUserExternalNestedInput
  }

  export type UserExternalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUncheckedUpdateManyWithoutUserExternalNestedInput
  }

  export type UserExternalCreateManyInput = {
    id?: number
    name: string
    email: string
    tel: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserExternalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExternalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoWorkCreateInput = {
    name: string
    description: string
    location: string
    tel: string
    picture: string
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkCreateNestedManyWithoutCoWorkInput
    userInternal?: UserInternalCreateNestedOneWithoutCoWorkInput
    Close?: CloseCreateNestedOneWithoutCoworkInput
    Open?: OpenCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId?: number | null
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedCreateNestedManyWithoutCoWorkInput
    Close?: CloseUncheckedCreateNestedOneWithoutCoworkInput
    Open?: OpenUncheckedCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursUncheckedCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUpdateManyWithoutCoWorkNestedInput
    userInternal?: UserInternalUpdateOneWithoutCoWorkNestedInput
    Close?: CloseUpdateOneWithoutCoworkNestedInput
    Open?: OpenUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: NullableIntFieldUpdateOperationsInput | number | null
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedUpdateManyWithoutCoWorkNestedInput
    Close?: CloseUncheckedUpdateOneWithoutCoworkNestedInput
    Open?: OpenUncheckedUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUncheckedUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkCreateManyInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId?: number | null
  }

  export type CoWorkUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type CoWorkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserInternalCreateInput = {
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    coWork?: CoWorkCreateNestedOneWithoutUserInternalInput
  }

  export type UserInternalUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    coWork?: CoWorkUncheckedCreateNestedOneWithoutUserInternalInput
  }

  export type UserInternalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUpdateOneWithoutUserInternalNestedInput
  }

  export type UserInternalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUncheckedUpdateOneWithoutUserInternalNestedInput
  }

  export type UserInternalCreateManyInput = {
    id?: number
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserInternalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInternalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    BranchToRoom?: BranchToRoomCreateNestedOneWithoutRoomInput
    RoomRate?: RoomRateCreateNestedManyWithoutRoomInput
    BookRoom?: BookRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    BranchToRoom?: BranchToRoomUncheckedCreateNestedOneWithoutRoomInput
    RoomRate?: RoomRateUncheckedCreateNestedManyWithoutRoomInput
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchToRoom?: BranchToRoomUpdateOneWithoutRoomNestedInput
    RoomRate?: RoomRateUpdateManyWithoutRoomNestedInput
    BookRoom?: BookRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchToRoom?: BranchToRoomUncheckedUpdateOneWithoutRoomNestedInput
    RoomRate?: RoomRateUncheckedUpdateManyWithoutRoomNestedInput
    BookRoom?: BookRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomRateCreateInput = {
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
    BookRoom?: BookRoomCreateNestedManyWithoutRoomRateInput
    duration: durationCategoryCreateNestedOneWithoutRoomRateInput
    room?: RoomCreateNestedOneWithoutRoomRateInput
  }

  export type RoomRateUncheckedCreateInput = {
    id?: number
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    durationCategoryId: number
    roomId?: number | null
    active?: boolean | null
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutRoomRateInput
  }

  export type RoomRateUpdateInput = {
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    BookRoom?: BookRoomUpdateManyWithoutRoomRateNestedInput
    duration?: durationCategoryUpdateOneRequiredWithoutRoomRateNestedInput
    room?: RoomUpdateOneWithoutRoomRateNestedInput
  }

  export type RoomRateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationCategoryId?: IntFieldUpdateOperationsInput | number
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    BookRoom?: BookRoomUncheckedUpdateManyWithoutRoomRateNestedInput
  }

  export type RoomRateCreateManyInput = {
    id?: number
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    durationCategoryId: number
    roomId?: number | null
    active?: boolean | null
  }

  export type RoomRateUpdateManyMutationInput = {
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RoomRateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationCategoryId?: IntFieldUpdateOperationsInput | number
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type durationCategoryCreateInput = {
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomRate?: RoomRateCreateNestedManyWithoutDurationInput
  }

  export type durationCategoryUncheckedCreateInput = {
    id?: number
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomRate?: RoomRateUncheckedCreateNestedManyWithoutDurationInput
  }

  export type durationCategoryUpdateInput = {
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomRate?: RoomRateUpdateManyWithoutDurationNestedInput
  }

  export type durationCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomRate?: RoomRateUncheckedUpdateManyWithoutDurationNestedInput
  }

  export type durationCategoryCreateManyInput = {
    id?: number
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type durationCategoryUpdateManyMutationInput = {
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type durationCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityCreateInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    FacilityToCoWork?: FacilityToCoWorkCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    FacilityToCoWork?: FacilityToCoWorkUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FacilityToCoWork?: FacilityToCoWorkUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FacilityToCoWork?: FacilityToCoWorkUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToCoWorkCreateInput = {
    createAt?: Date | string
    updateAt?: Date | string
    coWork: CoWorkCreateNestedOneWithoutFacilityToCoWorkInput
    facility: FacilityCreateNestedOneWithoutFacilityToCoWorkInput
  }

  export type FacilityToCoWorkUncheckedCreateInput = {
    id?: number
    coWorkId: number
    facilityId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToCoWorkUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUpdateOneRequiredWithoutFacilityToCoWorkNestedInput
    facility?: FacilityUpdateOneRequiredWithoutFacilityToCoWorkNestedInput
  }

  export type FacilityToCoWorkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToCoWorkCreateManyInput = {
    id?: number
    coWorkId: number
    facilityId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToCoWorkUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToCoWorkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchToRoomCreateInput = {
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
    coWork: CoWorkCreateNestedOneWithoutBranchToRoomInput
    room: RoomCreateNestedOneWithoutBranchToRoomInput
  }

  export type BranchToRoomUncheckedCreateInput = {
    id?: number
    coWorkId: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
  }

  export type BranchToRoomUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    coWork?: CoWorkUpdateOneRequiredWithoutBranchToRoomNestedInput
    room?: RoomUpdateOneRequiredWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BranchToRoomCreateManyInput = {
    id?: number
    coWorkId: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
  }

  export type BranchToRoomUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BranchToRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BookRoomCreateInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    price?: number | null
    room?: RoomCreateNestedOneWithoutBookRoomInput
    roomRate: RoomRateCreateNestedOneWithoutBookRoomInput
    UserExternal: UserExternalCreateNestedOneWithoutBookRoomInput
    vertifyCode: VertifyBookingCodeCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateInput = {
    id?: number
    startTime: Date | string
    roomId?: number | null
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
    price?: number | null
  }

  export type BookRoomUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    room?: RoomUpdateOneWithoutBookRoomNestedInput
    roomRate?: RoomRateUpdateOneRequiredWithoutBookRoomNestedInput
    UserExternal?: UserExternalUpdateOneRequiredWithoutBookRoomNestedInput
    vertifyCode?: VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookRoomCreateManyInput = {
    id?: number
    startTime: Date | string
    roomId?: number | null
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
    price?: number | null
  }

  export type BookRoomUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VertifyBookingCodeCreateInput = {
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    bookRoom?: BookRoomCreateNestedManyWithoutVertifyCodeInput
  }

  export type VertifyBookingCodeUncheckedCreateInput = {
    id?: number
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    bookRoom?: BookRoomUncheckedCreateNestedManyWithoutVertifyCodeInput
  }

  export type VertifyBookingCodeUpdateInput = {
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookRoom?: BookRoomUpdateManyWithoutVertifyCodeNestedInput
  }

  export type VertifyBookingCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookRoom?: BookRoomUncheckedUpdateManyWithoutVertifyCodeNestedInput
  }

  export type VertifyBookingCodeCreateManyInput = {
    id?: number
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VertifyBookingCodeUpdateManyMutationInput = {
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VertifyBookingCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCreateInput = {
    monOpen: number
    tueOpen: number
    wedOpen: number
    thursOpen: number
    friOpen: number
    satOpen: number
    sunOpen: number
    createAt?: Date | string
    updateAt?: Date | string
    cowork: CoWorkCreateNestedOneWithoutOpenInput
  }

  export type OpenUncheckedCreateInput = {
    id?: number
    monOpen: number
    tueOpen: number
    wedOpen: number
    thursOpen: number
    friOpen: number
    satOpen: number
    sunOpen: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenUpdateInput = {
    monOpen?: IntFieldUpdateOperationsInput | number
    tueOpen?: IntFieldUpdateOperationsInput | number
    wedOpen?: IntFieldUpdateOperationsInput | number
    thursOpen?: IntFieldUpdateOperationsInput | number
    friOpen?: IntFieldUpdateOperationsInput | number
    satOpen?: IntFieldUpdateOperationsInput | number
    sunOpen?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cowork?: CoWorkUpdateOneRequiredWithoutOpenNestedInput
  }

  export type OpenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    monOpen?: IntFieldUpdateOperationsInput | number
    tueOpen?: IntFieldUpdateOperationsInput | number
    wedOpen?: IntFieldUpdateOperationsInput | number
    thursOpen?: IntFieldUpdateOperationsInput | number
    friOpen?: IntFieldUpdateOperationsInput | number
    satOpen?: IntFieldUpdateOperationsInput | number
    sunOpen?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCreateManyInput = {
    id?: number
    monOpen: number
    tueOpen: number
    wedOpen: number
    thursOpen: number
    friOpen: number
    satOpen: number
    sunOpen: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenUpdateManyMutationInput = {
    monOpen?: IntFieldUpdateOperationsInput | number
    tueOpen?: IntFieldUpdateOperationsInput | number
    wedOpen?: IntFieldUpdateOperationsInput | number
    thursOpen?: IntFieldUpdateOperationsInput | number
    friOpen?: IntFieldUpdateOperationsInput | number
    satOpen?: IntFieldUpdateOperationsInput | number
    sunOpen?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    monOpen?: IntFieldUpdateOperationsInput | number
    tueOpen?: IntFieldUpdateOperationsInput | number
    wedOpen?: IntFieldUpdateOperationsInput | number
    thursOpen?: IntFieldUpdateOperationsInput | number
    friOpen?: IntFieldUpdateOperationsInput | number
    satOpen?: IntFieldUpdateOperationsInput | number
    sunOpen?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseCreateInput = {
    monClose: number
    tueClose: number
    wedClose: number
    thursClose: number
    friClose: number
    satClose: number
    sunClose: number
    createAt?: Date | string
    updateAt?: Date | string
    cowork: CoWorkCreateNestedOneWithoutCloseInput
  }

  export type CloseUncheckedCreateInput = {
    id?: number
    monClose: number
    tueClose: number
    wedClose: number
    thursClose: number
    friClose: number
    satClose: number
    sunClose: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CloseUpdateInput = {
    monClose?: IntFieldUpdateOperationsInput | number
    tueClose?: IntFieldUpdateOperationsInput | number
    wedClose?: IntFieldUpdateOperationsInput | number
    thursClose?: IntFieldUpdateOperationsInput | number
    friClose?: IntFieldUpdateOperationsInput | number
    satClose?: IntFieldUpdateOperationsInput | number
    sunClose?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cowork?: CoWorkUpdateOneRequiredWithoutCloseNestedInput
  }

  export type CloseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    monClose?: IntFieldUpdateOperationsInput | number
    tueClose?: IntFieldUpdateOperationsInput | number
    wedClose?: IntFieldUpdateOperationsInput | number
    thursClose?: IntFieldUpdateOperationsInput | number
    friClose?: IntFieldUpdateOperationsInput | number
    satClose?: IntFieldUpdateOperationsInput | number
    sunClose?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseCreateManyInput = {
    id?: number
    monClose: number
    tueClose: number
    wedClose: number
    thursClose: number
    friClose: number
    satClose: number
    sunClose: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CloseUpdateManyMutationInput = {
    monClose?: IntFieldUpdateOperationsInput | number
    tueClose?: IntFieldUpdateOperationsInput | number
    wedClose?: IntFieldUpdateOperationsInput | number
    thursClose?: IntFieldUpdateOperationsInput | number
    friClose?: IntFieldUpdateOperationsInput | number
    satClose?: IntFieldUpdateOperationsInput | number
    sunClose?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    monClose?: IntFieldUpdateOperationsInput | number
    tueClose?: IntFieldUpdateOperationsInput | number
    wedClose?: IntFieldUpdateOperationsInput | number
    thursClose?: IntFieldUpdateOperationsInput | number
    friClose?: IntFieldUpdateOperationsInput | number
    satClose?: IntFieldUpdateOperationsInput | number
    sunClose?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenClose24HoursCreateInput = {
    mon24hours: boolean
    tue24hours: boolean
    wed24hours: boolean
    thurs24hours: boolean
    fri24hours: boolean
    sat24hours: boolean
    sun24hours: boolean
    createAt?: Date | string
    updateAt?: Date | string
    cowork: CoWorkCreateNestedOneWithoutOpenClose24HoursInput
  }

  export type OpenClose24HoursUncheckedCreateInput = {
    id?: number
    mon24hours: boolean
    tue24hours: boolean
    wed24hours: boolean
    thurs24hours: boolean
    fri24hours: boolean
    sat24hours: boolean
    sun24hours: boolean
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenClose24HoursUpdateInput = {
    mon24hours?: BoolFieldUpdateOperationsInput | boolean
    tue24hours?: BoolFieldUpdateOperationsInput | boolean
    wed24hours?: BoolFieldUpdateOperationsInput | boolean
    thurs24hours?: BoolFieldUpdateOperationsInput | boolean
    fri24hours?: BoolFieldUpdateOperationsInput | boolean
    sat24hours?: BoolFieldUpdateOperationsInput | boolean
    sun24hours?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cowork?: CoWorkUpdateOneRequiredWithoutOpenClose24HoursNestedInput
  }

  export type OpenClose24HoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mon24hours?: BoolFieldUpdateOperationsInput | boolean
    tue24hours?: BoolFieldUpdateOperationsInput | boolean
    wed24hours?: BoolFieldUpdateOperationsInput | boolean
    thurs24hours?: BoolFieldUpdateOperationsInput | boolean
    fri24hours?: BoolFieldUpdateOperationsInput | boolean
    sat24hours?: BoolFieldUpdateOperationsInput | boolean
    sun24hours?: BoolFieldUpdateOperationsInput | boolean
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenClose24HoursCreateManyInput = {
    id?: number
    mon24hours: boolean
    tue24hours: boolean
    wed24hours: boolean
    thurs24hours: boolean
    fri24hours: boolean
    sat24hours: boolean
    sun24hours: boolean
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenClose24HoursUpdateManyMutationInput = {
    mon24hours?: BoolFieldUpdateOperationsInput | boolean
    tue24hours?: BoolFieldUpdateOperationsInput | boolean
    wed24hours?: BoolFieldUpdateOperationsInput | boolean
    thurs24hours?: BoolFieldUpdateOperationsInput | boolean
    fri24hours?: BoolFieldUpdateOperationsInput | boolean
    sat24hours?: BoolFieldUpdateOperationsInput | boolean
    sun24hours?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenClose24HoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mon24hours?: BoolFieldUpdateOperationsInput | boolean
    tue24hours?: BoolFieldUpdateOperationsInput | boolean
    wed24hours?: BoolFieldUpdateOperationsInput | boolean
    thurs24hours?: BoolFieldUpdateOperationsInput | boolean
    fri24hours?: BoolFieldUpdateOperationsInput | boolean
    sat24hours?: BoolFieldUpdateOperationsInput | boolean
    sun24hours?: BoolFieldUpdateOperationsInput | boolean
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCloseBooleanCreateInput = {
    monOnOff: boolean
    tueOnOff: boolean
    wedOnOff: boolean
    thursOnOff: boolean
    friOnOff: boolean
    satOnOff: boolean
    sunOnOff: boolean
    createAt?: Date | string
    updateAt?: Date | string
    cowork: CoWorkCreateNestedOneWithoutOpenCloseBooleanInput
  }

  export type OpenCloseBooleanUncheckedCreateInput = {
    id?: number
    monOnOff: boolean
    tueOnOff: boolean
    wedOnOff: boolean
    thursOnOff: boolean
    friOnOff: boolean
    satOnOff: boolean
    sunOnOff: boolean
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCloseBooleanUpdateInput = {
    monOnOff?: BoolFieldUpdateOperationsInput | boolean
    tueOnOff?: BoolFieldUpdateOperationsInput | boolean
    wedOnOff?: BoolFieldUpdateOperationsInput | boolean
    thursOnOff?: BoolFieldUpdateOperationsInput | boolean
    friOnOff?: BoolFieldUpdateOperationsInput | boolean
    satOnOff?: BoolFieldUpdateOperationsInput | boolean
    sunOnOff?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cowork?: CoWorkUpdateOneRequiredWithoutOpenCloseBooleanNestedInput
  }

  export type OpenCloseBooleanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    monOnOff?: BoolFieldUpdateOperationsInput | boolean
    tueOnOff?: BoolFieldUpdateOperationsInput | boolean
    wedOnOff?: BoolFieldUpdateOperationsInput | boolean
    thursOnOff?: BoolFieldUpdateOperationsInput | boolean
    friOnOff?: BoolFieldUpdateOperationsInput | boolean
    satOnOff?: BoolFieldUpdateOperationsInput | boolean
    sunOnOff?: BoolFieldUpdateOperationsInput | boolean
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCloseBooleanCreateManyInput = {
    id?: number
    monOnOff: boolean
    tueOnOff: boolean
    wedOnOff: boolean
    thursOnOff: boolean
    friOnOff: boolean
    satOnOff: boolean
    sunOnOff: boolean
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCloseBooleanUpdateManyMutationInput = {
    monOnOff?: BoolFieldUpdateOperationsInput | boolean
    tueOnOff?: BoolFieldUpdateOperationsInput | boolean
    wedOnOff?: BoolFieldUpdateOperationsInput | boolean
    thursOnOff?: BoolFieldUpdateOperationsInput | boolean
    friOnOff?: BoolFieldUpdateOperationsInput | boolean
    satOnOff?: BoolFieldUpdateOperationsInput | boolean
    sunOnOff?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCloseBooleanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    monOnOff?: BoolFieldUpdateOperationsInput | boolean
    tueOnOff?: BoolFieldUpdateOperationsInput | boolean
    wedOnOff?: BoolFieldUpdateOperationsInput | boolean
    thursOnOff?: BoolFieldUpdateOperationsInput | boolean
    friOnOff?: BoolFieldUpdateOperationsInput | boolean
    satOnOff?: BoolFieldUpdateOperationsInput | boolean
    sunOnOff?: BoolFieldUpdateOperationsInput | boolean
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BookRoomListRelationFilter = {
    every?: BookRoomWhereInput
    some?: BookRoomWhereInput
    none?: BookRoomWhereInput
  }

  export type BookRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExternalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserExternalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserExternalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserExternalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserExternalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BranchToRoomListRelationFilter = {
    every?: BranchToRoomWhereInput
    some?: BranchToRoomWhereInput
    none?: BranchToRoomWhereInput
  }

  export type FacilityToCoWorkListRelationFilter = {
    every?: FacilityToCoWorkWhereInput
    some?: FacilityToCoWorkWhereInput
    none?: FacilityToCoWorkWhereInput
  }

  export type UserInternalRelationFilter = {
    is?: UserInternalWhereInput | null
    isNot?: UserInternalWhereInput | null
  }

  export type CloseRelationFilter = {
    is?: CloseWhereInput | null
    isNot?: CloseWhereInput | null
  }

  export type OpenRelationFilter = {
    is?: OpenWhereInput | null
    isNot?: OpenWhereInput | null
  }

  export type OpenClose24HoursRelationFilter = {
    is?: OpenClose24HoursWhereInput | null
    isNot?: OpenClose24HoursWhereInput | null
  }

  export type OpenCloseBooleanRelationFilter = {
    is?: OpenCloseBooleanWhereInput | null
    isNot?: OpenCloseBooleanWhereInput | null
  }

  export type BranchToRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityToCoWorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoWorkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkAvgOrderByAggregateInput = {
    id?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkSumOrderByAggregateInput = {
    id?: SortOrder
    userInternalId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type CoWorkRelationFilter = {
    is?: CoWorkWhereInput
    isNot?: CoWorkWhereInput
  }

  export type UserInternalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserInternalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserInternalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserInternalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserInternalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BranchToRoomRelationFilter = {
    is?: BranchToRoomWhereInput | null
    isNot?: BranchToRoomWhereInput | null
  }

  export type RoomRateListRelationFilter = {
    every?: RoomRateWhereInput
    some?: RoomRateWhereInput
    none?: RoomRateWhereInput
  }

  export type RoomRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DurationCategoryRelationFilter = {
    is?: durationCategoryWhereInput
    isNot?: durationCategoryWhereInput
  }

  export type RoomRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomRateCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    durationCategoryId?: SortOrder
    roomId?: SortOrder
    active?: SortOrder
  }

  export type RoomRateAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationCategoryId?: SortOrder
    roomId?: SortOrder
  }

  export type RoomRateMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    durationCategoryId?: SortOrder
    roomId?: SortOrder
    active?: SortOrder
  }

  export type RoomRateMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    durationCategoryId?: SortOrder
    roomId?: SortOrder
    active?: SortOrder
  }

  export type RoomRateSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationCategoryId?: SortOrder
    roomId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type durationCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type durationCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type durationCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type durationCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type durationCategorySumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacilityRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type FacilityToCoWorkCountOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityToCoWorkAvgOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    facilityId?: SortOrder
  }

  export type FacilityToCoWorkMaxOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityToCoWorkMinOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityToCoWorkSumOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    facilityId?: SortOrder
  }

  export type BranchToRoomCountOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    active?: SortOrder
  }

  export type BranchToRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
  }

  export type BranchToRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    active?: SortOrder
  }

  export type BranchToRoomMinOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    active?: SortOrder
  }

  export type BranchToRoomSumOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
  }

  export type RoomRateRelationFilter = {
    is?: RoomRateWhereInput
    isNot?: RoomRateWhereInput
  }

  export type UserExternalRelationFilter = {
    is?: UserExternalWhereInput
    isNot?: UserExternalWhereInput
  }

  export type VertifyBookingCodeRelationFilter = {
    is?: VertifyBookingCodeWhereInput
    isNot?: VertifyBookingCodeWhereInput
  }

  export type BookRoomCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    roomId?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    price?: SortOrder
  }

  export type BookRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    roomRateId?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    price?: SortOrder
  }

  export type BookRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    roomId?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    price?: SortOrder
  }

  export type BookRoomMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    roomId?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    price?: SortOrder
  }

  export type BookRoomSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    roomRateId?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    price?: SortOrder
  }

  export type VertifyBookingCodeCountOrderByAggregateInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VertifyBookingCodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VertifyBookingCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VertifyBookingCodeMinOrderByAggregateInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VertifyBookingCodeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OpenCountOrderByAggregateInput = {
    id?: SortOrder
    monOpen?: SortOrder
    tueOpen?: SortOrder
    wedOpen?: SortOrder
    thursOpen?: SortOrder
    friOpen?: SortOrder
    satOpen?: SortOrder
    sunOpen?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenAvgOrderByAggregateInput = {
    id?: SortOrder
    monOpen?: SortOrder
    tueOpen?: SortOrder
    wedOpen?: SortOrder
    thursOpen?: SortOrder
    friOpen?: SortOrder
    satOpen?: SortOrder
    sunOpen?: SortOrder
    coWorkId?: SortOrder
  }

  export type OpenMaxOrderByAggregateInput = {
    id?: SortOrder
    monOpen?: SortOrder
    tueOpen?: SortOrder
    wedOpen?: SortOrder
    thursOpen?: SortOrder
    friOpen?: SortOrder
    satOpen?: SortOrder
    sunOpen?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenMinOrderByAggregateInput = {
    id?: SortOrder
    monOpen?: SortOrder
    tueOpen?: SortOrder
    wedOpen?: SortOrder
    thursOpen?: SortOrder
    friOpen?: SortOrder
    satOpen?: SortOrder
    sunOpen?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenSumOrderByAggregateInput = {
    id?: SortOrder
    monOpen?: SortOrder
    tueOpen?: SortOrder
    wedOpen?: SortOrder
    thursOpen?: SortOrder
    friOpen?: SortOrder
    satOpen?: SortOrder
    sunOpen?: SortOrder
    coWorkId?: SortOrder
  }

  export type CloseCountOrderByAggregateInput = {
    id?: SortOrder
    monClose?: SortOrder
    tueClose?: SortOrder
    wedClose?: SortOrder
    thursClose?: SortOrder
    friClose?: SortOrder
    satClose?: SortOrder
    sunClose?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CloseAvgOrderByAggregateInput = {
    id?: SortOrder
    monClose?: SortOrder
    tueClose?: SortOrder
    wedClose?: SortOrder
    thursClose?: SortOrder
    friClose?: SortOrder
    satClose?: SortOrder
    sunClose?: SortOrder
    coWorkId?: SortOrder
  }

  export type CloseMaxOrderByAggregateInput = {
    id?: SortOrder
    monClose?: SortOrder
    tueClose?: SortOrder
    wedClose?: SortOrder
    thursClose?: SortOrder
    friClose?: SortOrder
    satClose?: SortOrder
    sunClose?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CloseMinOrderByAggregateInput = {
    id?: SortOrder
    monClose?: SortOrder
    tueClose?: SortOrder
    wedClose?: SortOrder
    thursClose?: SortOrder
    friClose?: SortOrder
    satClose?: SortOrder
    sunClose?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CloseSumOrderByAggregateInput = {
    id?: SortOrder
    monClose?: SortOrder
    tueClose?: SortOrder
    wedClose?: SortOrder
    thursClose?: SortOrder
    friClose?: SortOrder
    satClose?: SortOrder
    sunClose?: SortOrder
    coWorkId?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type OpenClose24HoursCountOrderByAggregateInput = {
    id?: SortOrder
    mon24hours?: SortOrder
    tue24hours?: SortOrder
    wed24hours?: SortOrder
    thurs24hours?: SortOrder
    fri24hours?: SortOrder
    sat24hours?: SortOrder
    sun24hours?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenClose24HoursAvgOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
  }

  export type OpenClose24HoursMaxOrderByAggregateInput = {
    id?: SortOrder
    mon24hours?: SortOrder
    tue24hours?: SortOrder
    wed24hours?: SortOrder
    thurs24hours?: SortOrder
    fri24hours?: SortOrder
    sat24hours?: SortOrder
    sun24hours?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenClose24HoursMinOrderByAggregateInput = {
    id?: SortOrder
    mon24hours?: SortOrder
    tue24hours?: SortOrder
    wed24hours?: SortOrder
    thurs24hours?: SortOrder
    fri24hours?: SortOrder
    sat24hours?: SortOrder
    sun24hours?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenClose24HoursSumOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type OpenCloseBooleanCountOrderByAggregateInput = {
    id?: SortOrder
    monOnOff?: SortOrder
    tueOnOff?: SortOrder
    wedOnOff?: SortOrder
    thursOnOff?: SortOrder
    friOnOff?: SortOrder
    satOnOff?: SortOrder
    sunOnOff?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenCloseBooleanAvgOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
  }

  export type OpenCloseBooleanMaxOrderByAggregateInput = {
    id?: SortOrder
    monOnOff?: SortOrder
    tueOnOff?: SortOrder
    wedOnOff?: SortOrder
    thursOnOff?: SortOrder
    friOnOff?: SortOrder
    satOnOff?: SortOrder
    sunOnOff?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenCloseBooleanMinOrderByAggregateInput = {
    id?: SortOrder
    monOnOff?: SortOrder
    tueOnOff?: SortOrder
    wedOnOff?: SortOrder
    thursOnOff?: SortOrder
    friOnOff?: SortOrder
    satOnOff?: SortOrder
    sunOnOff?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenCloseBooleanSumOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
  }

  export type BookRoomCreateNestedManyWithoutUserExternalInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutUserExternalInput>, Enumerable<BookRoomUncheckedCreateWithoutUserExternalInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutUserExternalInput>
    createMany?: BookRoomCreateManyUserExternalInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BookRoomUncheckedCreateNestedManyWithoutUserExternalInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutUserExternalInput>, Enumerable<BookRoomUncheckedCreateWithoutUserExternalInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutUserExternalInput>
    createMany?: BookRoomCreateManyUserExternalInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookRoomUpdateManyWithoutUserExternalNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutUserExternalInput>, Enumerable<BookRoomUncheckedCreateWithoutUserExternalInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutUserExternalInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutUserExternalInput>
    createMany?: BookRoomCreateManyUserExternalInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutUserExternalInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutUserExternalInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookRoomUncheckedUpdateManyWithoutUserExternalNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutUserExternalInput>, Enumerable<BookRoomUncheckedCreateWithoutUserExternalInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutUserExternalInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutUserExternalInput>
    createMany?: BookRoomCreateManyUserExternalInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutUserExternalInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutUserExternalInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type BranchToRoomCreateNestedManyWithoutCoWorkInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutCoWorkInput>, Enumerable<BranchToRoomUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutCoWorkInput>
    createMany?: BranchToRoomCreateManyCoWorkInputEnvelope
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
  }

  export type FacilityToCoWorkCreateNestedManyWithoutCoWorkInput = {
    create?: XOR<Enumerable<FacilityToCoWorkCreateWithoutCoWorkInput>, Enumerable<FacilityToCoWorkUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<FacilityToCoWorkCreateOrConnectWithoutCoWorkInput>
    createMany?: FacilityToCoWorkCreateManyCoWorkInputEnvelope
    connect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
  }

  export type UserInternalCreateNestedOneWithoutCoWorkInput = {
    create?: XOR<UserInternalCreateWithoutCoWorkInput, UserInternalUncheckedCreateWithoutCoWorkInput>
    connectOrCreate?: UserInternalCreateOrConnectWithoutCoWorkInput
    connect?: UserInternalWhereUniqueInput
  }

  export type CloseCreateNestedOneWithoutCoworkInput = {
    create?: XOR<CloseCreateWithoutCoworkInput, CloseUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: CloseCreateOrConnectWithoutCoworkInput
    connect?: CloseWhereUniqueInput
  }

  export type OpenCreateNestedOneWithoutCoworkInput = {
    create?: XOR<OpenCreateWithoutCoworkInput, OpenUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenCreateOrConnectWithoutCoworkInput
    connect?: OpenWhereUniqueInput
  }

  export type OpenClose24HoursCreateNestedOneWithoutCoworkInput = {
    create?: XOR<OpenClose24HoursCreateWithoutCoworkInput, OpenClose24HoursUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenClose24HoursCreateOrConnectWithoutCoworkInput
    connect?: OpenClose24HoursWhereUniqueInput
  }

  export type OpenCloseBooleanCreateNestedOneWithoutCoworkInput = {
    create?: XOR<OpenCloseBooleanCreateWithoutCoworkInput, OpenCloseBooleanUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenCloseBooleanCreateOrConnectWithoutCoworkInput
    connect?: OpenCloseBooleanWhereUniqueInput
  }

  export type BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutCoWorkInput>, Enumerable<BranchToRoomUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutCoWorkInput>
    createMany?: BranchToRoomCreateManyCoWorkInputEnvelope
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
  }

  export type FacilityToCoWorkUncheckedCreateNestedManyWithoutCoWorkInput = {
    create?: XOR<Enumerable<FacilityToCoWorkCreateWithoutCoWorkInput>, Enumerable<FacilityToCoWorkUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<FacilityToCoWorkCreateOrConnectWithoutCoWorkInput>
    createMany?: FacilityToCoWorkCreateManyCoWorkInputEnvelope
    connect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
  }

  export type CloseUncheckedCreateNestedOneWithoutCoworkInput = {
    create?: XOR<CloseCreateWithoutCoworkInput, CloseUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: CloseCreateOrConnectWithoutCoworkInput
    connect?: CloseWhereUniqueInput
  }

  export type OpenUncheckedCreateNestedOneWithoutCoworkInput = {
    create?: XOR<OpenCreateWithoutCoworkInput, OpenUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenCreateOrConnectWithoutCoworkInput
    connect?: OpenWhereUniqueInput
  }

  export type OpenClose24HoursUncheckedCreateNestedOneWithoutCoworkInput = {
    create?: XOR<OpenClose24HoursCreateWithoutCoworkInput, OpenClose24HoursUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenClose24HoursCreateOrConnectWithoutCoworkInput
    connect?: OpenClose24HoursWhereUniqueInput
  }

  export type OpenCloseBooleanUncheckedCreateNestedOneWithoutCoworkInput = {
    create?: XOR<OpenCloseBooleanCreateWithoutCoworkInput, OpenCloseBooleanUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenCloseBooleanCreateOrConnectWithoutCoworkInput
    connect?: OpenCloseBooleanWhereUniqueInput
  }

  export type BranchToRoomUpdateManyWithoutCoWorkNestedInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutCoWorkInput>, Enumerable<BranchToRoomUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutCoWorkInput>
    upsert?: Enumerable<BranchToRoomUpsertWithWhereUniqueWithoutCoWorkInput>
    createMany?: BranchToRoomCreateManyCoWorkInputEnvelope
    set?: Enumerable<BranchToRoomWhereUniqueInput>
    disconnect?: Enumerable<BranchToRoomWhereUniqueInput>
    delete?: Enumerable<BranchToRoomWhereUniqueInput>
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
    update?: Enumerable<BranchToRoomUpdateWithWhereUniqueWithoutCoWorkInput>
    updateMany?: Enumerable<BranchToRoomUpdateManyWithWhereWithoutCoWorkInput>
    deleteMany?: Enumerable<BranchToRoomScalarWhereInput>
  }

  export type FacilityToCoWorkUpdateManyWithoutCoWorkNestedInput = {
    create?: XOR<Enumerable<FacilityToCoWorkCreateWithoutCoWorkInput>, Enumerable<FacilityToCoWorkUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<FacilityToCoWorkCreateOrConnectWithoutCoWorkInput>
    upsert?: Enumerable<FacilityToCoWorkUpsertWithWhereUniqueWithoutCoWorkInput>
    createMany?: FacilityToCoWorkCreateManyCoWorkInputEnvelope
    set?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    disconnect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    delete?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    connect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    update?: Enumerable<FacilityToCoWorkUpdateWithWhereUniqueWithoutCoWorkInput>
    updateMany?: Enumerable<FacilityToCoWorkUpdateManyWithWhereWithoutCoWorkInput>
    deleteMany?: Enumerable<FacilityToCoWorkScalarWhereInput>
  }

  export type UserInternalUpdateOneWithoutCoWorkNestedInput = {
    create?: XOR<UserInternalCreateWithoutCoWorkInput, UserInternalUncheckedCreateWithoutCoWorkInput>
    connectOrCreate?: UserInternalCreateOrConnectWithoutCoWorkInput
    upsert?: UserInternalUpsertWithoutCoWorkInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserInternalWhereUniqueInput
    update?: XOR<UserInternalUpdateWithoutCoWorkInput, UserInternalUncheckedUpdateWithoutCoWorkInput>
  }

  export type CloseUpdateOneWithoutCoworkNestedInput = {
    create?: XOR<CloseCreateWithoutCoworkInput, CloseUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: CloseCreateOrConnectWithoutCoworkInput
    upsert?: CloseUpsertWithoutCoworkInput
    disconnect?: boolean
    delete?: boolean
    connect?: CloseWhereUniqueInput
    update?: XOR<CloseUpdateWithoutCoworkInput, CloseUncheckedUpdateWithoutCoworkInput>
  }

  export type OpenUpdateOneWithoutCoworkNestedInput = {
    create?: XOR<OpenCreateWithoutCoworkInput, OpenUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenCreateOrConnectWithoutCoworkInput
    upsert?: OpenUpsertWithoutCoworkInput
    disconnect?: boolean
    delete?: boolean
    connect?: OpenWhereUniqueInput
    update?: XOR<OpenUpdateWithoutCoworkInput, OpenUncheckedUpdateWithoutCoworkInput>
  }

  export type OpenClose24HoursUpdateOneWithoutCoworkNestedInput = {
    create?: XOR<OpenClose24HoursCreateWithoutCoworkInput, OpenClose24HoursUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenClose24HoursCreateOrConnectWithoutCoworkInput
    upsert?: OpenClose24HoursUpsertWithoutCoworkInput
    disconnect?: boolean
    delete?: boolean
    connect?: OpenClose24HoursWhereUniqueInput
    update?: XOR<OpenClose24HoursUpdateWithoutCoworkInput, OpenClose24HoursUncheckedUpdateWithoutCoworkInput>
  }

  export type OpenCloseBooleanUpdateOneWithoutCoworkNestedInput = {
    create?: XOR<OpenCloseBooleanCreateWithoutCoworkInput, OpenCloseBooleanUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenCloseBooleanCreateOrConnectWithoutCoworkInput
    upsert?: OpenCloseBooleanUpsertWithoutCoworkInput
    disconnect?: boolean
    delete?: boolean
    connect?: OpenCloseBooleanWhereUniqueInput
    update?: XOR<OpenCloseBooleanUpdateWithoutCoworkInput, OpenCloseBooleanUncheckedUpdateWithoutCoworkInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutCoWorkInput>, Enumerable<BranchToRoomUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutCoWorkInput>
    upsert?: Enumerable<BranchToRoomUpsertWithWhereUniqueWithoutCoWorkInput>
    createMany?: BranchToRoomCreateManyCoWorkInputEnvelope
    set?: Enumerable<BranchToRoomWhereUniqueInput>
    disconnect?: Enumerable<BranchToRoomWhereUniqueInput>
    delete?: Enumerable<BranchToRoomWhereUniqueInput>
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
    update?: Enumerable<BranchToRoomUpdateWithWhereUniqueWithoutCoWorkInput>
    updateMany?: Enumerable<BranchToRoomUpdateManyWithWhereWithoutCoWorkInput>
    deleteMany?: Enumerable<BranchToRoomScalarWhereInput>
  }

  export type FacilityToCoWorkUncheckedUpdateManyWithoutCoWorkNestedInput = {
    create?: XOR<Enumerable<FacilityToCoWorkCreateWithoutCoWorkInput>, Enumerable<FacilityToCoWorkUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<FacilityToCoWorkCreateOrConnectWithoutCoWorkInput>
    upsert?: Enumerable<FacilityToCoWorkUpsertWithWhereUniqueWithoutCoWorkInput>
    createMany?: FacilityToCoWorkCreateManyCoWorkInputEnvelope
    set?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    disconnect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    delete?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    connect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    update?: Enumerable<FacilityToCoWorkUpdateWithWhereUniqueWithoutCoWorkInput>
    updateMany?: Enumerable<FacilityToCoWorkUpdateManyWithWhereWithoutCoWorkInput>
    deleteMany?: Enumerable<FacilityToCoWorkScalarWhereInput>
  }

  export type CloseUncheckedUpdateOneWithoutCoworkNestedInput = {
    create?: XOR<CloseCreateWithoutCoworkInput, CloseUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: CloseCreateOrConnectWithoutCoworkInput
    upsert?: CloseUpsertWithoutCoworkInput
    disconnect?: boolean
    delete?: boolean
    connect?: CloseWhereUniqueInput
    update?: XOR<CloseUpdateWithoutCoworkInput, CloseUncheckedUpdateWithoutCoworkInput>
  }

  export type OpenUncheckedUpdateOneWithoutCoworkNestedInput = {
    create?: XOR<OpenCreateWithoutCoworkInput, OpenUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenCreateOrConnectWithoutCoworkInput
    upsert?: OpenUpsertWithoutCoworkInput
    disconnect?: boolean
    delete?: boolean
    connect?: OpenWhereUniqueInput
    update?: XOR<OpenUpdateWithoutCoworkInput, OpenUncheckedUpdateWithoutCoworkInput>
  }

  export type OpenClose24HoursUncheckedUpdateOneWithoutCoworkNestedInput = {
    create?: XOR<OpenClose24HoursCreateWithoutCoworkInput, OpenClose24HoursUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenClose24HoursCreateOrConnectWithoutCoworkInput
    upsert?: OpenClose24HoursUpsertWithoutCoworkInput
    disconnect?: boolean
    delete?: boolean
    connect?: OpenClose24HoursWhereUniqueInput
    update?: XOR<OpenClose24HoursUpdateWithoutCoworkInput, OpenClose24HoursUncheckedUpdateWithoutCoworkInput>
  }

  export type OpenCloseBooleanUncheckedUpdateOneWithoutCoworkNestedInput = {
    create?: XOR<OpenCloseBooleanCreateWithoutCoworkInput, OpenCloseBooleanUncheckedCreateWithoutCoworkInput>
    connectOrCreate?: OpenCloseBooleanCreateOrConnectWithoutCoworkInput
    upsert?: OpenCloseBooleanUpsertWithoutCoworkInput
    disconnect?: boolean
    delete?: boolean
    connect?: OpenCloseBooleanWhereUniqueInput
    update?: XOR<OpenCloseBooleanUpdateWithoutCoworkInput, OpenCloseBooleanUncheckedUpdateWithoutCoworkInput>
  }

  export type CoWorkCreateNestedOneWithoutUserInternalInput = {
    create?: XOR<CoWorkCreateWithoutUserInternalInput, CoWorkUncheckedCreateWithoutUserInternalInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutUserInternalInput
    connect?: CoWorkWhereUniqueInput
  }

  export type CoWorkUncheckedCreateNestedOneWithoutUserInternalInput = {
    create?: XOR<CoWorkCreateWithoutUserInternalInput, CoWorkUncheckedCreateWithoutUserInternalInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutUserInternalInput
    connect?: CoWorkWhereUniqueInput
  }

  export type CoWorkUpdateOneWithoutUserInternalNestedInput = {
    create?: XOR<CoWorkCreateWithoutUserInternalInput, CoWorkUncheckedCreateWithoutUserInternalInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutUserInternalInput
    upsert?: CoWorkUpsertWithoutUserInternalInput
    disconnect?: boolean
    delete?: boolean
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutUserInternalInput, CoWorkUncheckedUpdateWithoutUserInternalInput>
  }

  export type CoWorkUncheckedUpdateOneWithoutUserInternalNestedInput = {
    create?: XOR<CoWorkCreateWithoutUserInternalInput, CoWorkUncheckedCreateWithoutUserInternalInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutUserInternalInput
    upsert?: CoWorkUpsertWithoutUserInternalInput
    disconnect?: boolean
    delete?: boolean
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutUserInternalInput, CoWorkUncheckedUpdateWithoutUserInternalInput>
  }

  export type BranchToRoomCreateNestedOneWithoutRoomInput = {
    create?: XOR<BranchToRoomCreateWithoutRoomInput, BranchToRoomUncheckedCreateWithoutRoomInput>
    connectOrCreate?: BranchToRoomCreateOrConnectWithoutRoomInput
    connect?: BranchToRoomWhereUniqueInput
  }

  export type RoomRateCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutRoomInput>, Enumerable<RoomRateUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutRoomInput>
    createMany?: RoomRateCreateManyRoomInputEnvelope
    connect?: Enumerable<RoomRateWhereUniqueInput>
  }

  export type BookRoomCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomInput>
    createMany?: BookRoomCreateManyRoomInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BranchToRoomUncheckedCreateNestedOneWithoutRoomInput = {
    create?: XOR<BranchToRoomCreateWithoutRoomInput, BranchToRoomUncheckedCreateWithoutRoomInput>
    connectOrCreate?: BranchToRoomCreateOrConnectWithoutRoomInput
    connect?: BranchToRoomWhereUniqueInput
  }

  export type RoomRateUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutRoomInput>, Enumerable<RoomRateUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutRoomInput>
    createMany?: RoomRateCreateManyRoomInputEnvelope
    connect?: Enumerable<RoomRateWhereUniqueInput>
  }

  export type BookRoomUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomInput>
    createMany?: BookRoomCreateManyRoomInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BranchToRoomUpdateOneWithoutRoomNestedInput = {
    create?: XOR<BranchToRoomCreateWithoutRoomInput, BranchToRoomUncheckedCreateWithoutRoomInput>
    connectOrCreate?: BranchToRoomCreateOrConnectWithoutRoomInput
    upsert?: BranchToRoomUpsertWithoutRoomInput
    disconnect?: boolean
    delete?: boolean
    connect?: BranchToRoomWhereUniqueInput
    update?: XOR<BranchToRoomUpdateWithoutRoomInput, BranchToRoomUncheckedUpdateWithoutRoomInput>
  }

  export type RoomRateUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutRoomInput>, Enumerable<RoomRateUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<RoomRateUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: RoomRateCreateManyRoomInputEnvelope
    set?: Enumerable<RoomRateWhereUniqueInput>
    disconnect?: Enumerable<RoomRateWhereUniqueInput>
    delete?: Enumerable<RoomRateWhereUniqueInput>
    connect?: Enumerable<RoomRateWhereUniqueInput>
    update?: Enumerable<RoomRateUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<RoomRateUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<RoomRateScalarWhereInput>
  }

  export type BookRoomUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: BookRoomCreateManyRoomInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type BranchToRoomUncheckedUpdateOneWithoutRoomNestedInput = {
    create?: XOR<BranchToRoomCreateWithoutRoomInput, BranchToRoomUncheckedCreateWithoutRoomInput>
    connectOrCreate?: BranchToRoomCreateOrConnectWithoutRoomInput
    upsert?: BranchToRoomUpsertWithoutRoomInput
    disconnect?: boolean
    delete?: boolean
    connect?: BranchToRoomWhereUniqueInput
    update?: XOR<BranchToRoomUpdateWithoutRoomInput, BranchToRoomUncheckedUpdateWithoutRoomInput>
  }

  export type RoomRateUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutRoomInput>, Enumerable<RoomRateUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<RoomRateUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: RoomRateCreateManyRoomInputEnvelope
    set?: Enumerable<RoomRateWhereUniqueInput>
    disconnect?: Enumerable<RoomRateWhereUniqueInput>
    delete?: Enumerable<RoomRateWhereUniqueInput>
    connect?: Enumerable<RoomRateWhereUniqueInput>
    update?: Enumerable<RoomRateUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<RoomRateUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<RoomRateScalarWhereInput>
  }

  export type BookRoomUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: BookRoomCreateManyRoomInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type BookRoomCreateNestedManyWithoutRoomRateInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomRateInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomRateInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomRateInput>
    createMany?: BookRoomCreateManyRoomRateInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type durationCategoryCreateNestedOneWithoutRoomRateInput = {
    create?: XOR<durationCategoryCreateWithoutRoomRateInput, durationCategoryUncheckedCreateWithoutRoomRateInput>
    connectOrCreate?: durationCategoryCreateOrConnectWithoutRoomRateInput
    connect?: durationCategoryWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutRoomRateInput = {
    create?: XOR<RoomCreateWithoutRoomRateInput, RoomUncheckedCreateWithoutRoomRateInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomRateInput
    connect?: RoomWhereUniqueInput
  }

  export type BookRoomUncheckedCreateNestedManyWithoutRoomRateInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomRateInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomRateInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomRateInput>
    createMany?: BookRoomCreateManyRoomRateInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BookRoomUpdateManyWithoutRoomRateNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomRateInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomRateInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomRateInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutRoomRateInput>
    createMany?: BookRoomCreateManyRoomRateInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutRoomRateInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutRoomRateInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type durationCategoryUpdateOneRequiredWithoutRoomRateNestedInput = {
    create?: XOR<durationCategoryCreateWithoutRoomRateInput, durationCategoryUncheckedCreateWithoutRoomRateInput>
    connectOrCreate?: durationCategoryCreateOrConnectWithoutRoomRateInput
    upsert?: durationCategoryUpsertWithoutRoomRateInput
    connect?: durationCategoryWhereUniqueInput
    update?: XOR<durationCategoryUpdateWithoutRoomRateInput, durationCategoryUncheckedUpdateWithoutRoomRateInput>
  }

  export type RoomUpdateOneWithoutRoomRateNestedInput = {
    create?: XOR<RoomCreateWithoutRoomRateInput, RoomUncheckedCreateWithoutRoomRateInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomRateInput
    upsert?: RoomUpsertWithoutRoomRateInput
    disconnect?: boolean
    delete?: boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutRoomRateInput, RoomUncheckedUpdateWithoutRoomRateInput>
  }

  export type BookRoomUncheckedUpdateManyWithoutRoomRateNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomRateInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomRateInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomRateInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutRoomRateInput>
    createMany?: BookRoomCreateManyRoomRateInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutRoomRateInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutRoomRateInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type RoomRateCreateNestedManyWithoutDurationInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutDurationInput>, Enumerable<RoomRateUncheckedCreateWithoutDurationInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutDurationInput>
    createMany?: RoomRateCreateManyDurationInputEnvelope
    connect?: Enumerable<RoomRateWhereUniqueInput>
  }

  export type RoomRateUncheckedCreateNestedManyWithoutDurationInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutDurationInput>, Enumerable<RoomRateUncheckedCreateWithoutDurationInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutDurationInput>
    createMany?: RoomRateCreateManyDurationInputEnvelope
    connect?: Enumerable<RoomRateWhereUniqueInput>
  }

  export type RoomRateUpdateManyWithoutDurationNestedInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutDurationInput>, Enumerable<RoomRateUncheckedCreateWithoutDurationInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutDurationInput>
    upsert?: Enumerable<RoomRateUpsertWithWhereUniqueWithoutDurationInput>
    createMany?: RoomRateCreateManyDurationInputEnvelope
    set?: Enumerable<RoomRateWhereUniqueInput>
    disconnect?: Enumerable<RoomRateWhereUniqueInput>
    delete?: Enumerable<RoomRateWhereUniqueInput>
    connect?: Enumerable<RoomRateWhereUniqueInput>
    update?: Enumerable<RoomRateUpdateWithWhereUniqueWithoutDurationInput>
    updateMany?: Enumerable<RoomRateUpdateManyWithWhereWithoutDurationInput>
    deleteMany?: Enumerable<RoomRateScalarWhereInput>
  }

  export type RoomRateUncheckedUpdateManyWithoutDurationNestedInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutDurationInput>, Enumerable<RoomRateUncheckedCreateWithoutDurationInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutDurationInput>
    upsert?: Enumerable<RoomRateUpsertWithWhereUniqueWithoutDurationInput>
    createMany?: RoomRateCreateManyDurationInputEnvelope
    set?: Enumerable<RoomRateWhereUniqueInput>
    disconnect?: Enumerable<RoomRateWhereUniqueInput>
    delete?: Enumerable<RoomRateWhereUniqueInput>
    connect?: Enumerable<RoomRateWhereUniqueInput>
    update?: Enumerable<RoomRateUpdateWithWhereUniqueWithoutDurationInput>
    updateMany?: Enumerable<RoomRateUpdateManyWithWhereWithoutDurationInput>
    deleteMany?: Enumerable<RoomRateScalarWhereInput>
  }

  export type FacilityToCoWorkCreateNestedManyWithoutFacilityInput = {
    create?: XOR<Enumerable<FacilityToCoWorkCreateWithoutFacilityInput>, Enumerable<FacilityToCoWorkUncheckedCreateWithoutFacilityInput>>
    connectOrCreate?: Enumerable<FacilityToCoWorkCreateOrConnectWithoutFacilityInput>
    createMany?: FacilityToCoWorkCreateManyFacilityInputEnvelope
    connect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
  }

  export type FacilityToCoWorkUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<Enumerable<FacilityToCoWorkCreateWithoutFacilityInput>, Enumerable<FacilityToCoWorkUncheckedCreateWithoutFacilityInput>>
    connectOrCreate?: Enumerable<FacilityToCoWorkCreateOrConnectWithoutFacilityInput>
    createMany?: FacilityToCoWorkCreateManyFacilityInputEnvelope
    connect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
  }

  export type FacilityToCoWorkUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<Enumerable<FacilityToCoWorkCreateWithoutFacilityInput>, Enumerable<FacilityToCoWorkUncheckedCreateWithoutFacilityInput>>
    connectOrCreate?: Enumerable<FacilityToCoWorkCreateOrConnectWithoutFacilityInput>
    upsert?: Enumerable<FacilityToCoWorkUpsertWithWhereUniqueWithoutFacilityInput>
    createMany?: FacilityToCoWorkCreateManyFacilityInputEnvelope
    set?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    disconnect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    delete?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    connect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    update?: Enumerable<FacilityToCoWorkUpdateWithWhereUniqueWithoutFacilityInput>
    updateMany?: Enumerable<FacilityToCoWorkUpdateManyWithWhereWithoutFacilityInput>
    deleteMany?: Enumerable<FacilityToCoWorkScalarWhereInput>
  }

  export type FacilityToCoWorkUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<Enumerable<FacilityToCoWorkCreateWithoutFacilityInput>, Enumerable<FacilityToCoWorkUncheckedCreateWithoutFacilityInput>>
    connectOrCreate?: Enumerable<FacilityToCoWorkCreateOrConnectWithoutFacilityInput>
    upsert?: Enumerable<FacilityToCoWorkUpsertWithWhereUniqueWithoutFacilityInput>
    createMany?: FacilityToCoWorkCreateManyFacilityInputEnvelope
    set?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    disconnect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    delete?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    connect?: Enumerable<FacilityToCoWorkWhereUniqueInput>
    update?: Enumerable<FacilityToCoWorkUpdateWithWhereUniqueWithoutFacilityInput>
    updateMany?: Enumerable<FacilityToCoWorkUpdateManyWithWhereWithoutFacilityInput>
    deleteMany?: Enumerable<FacilityToCoWorkScalarWhereInput>
  }

  export type CoWorkCreateNestedOneWithoutFacilityToCoWorkInput = {
    create?: XOR<CoWorkCreateWithoutFacilityToCoWorkInput, CoWorkUncheckedCreateWithoutFacilityToCoWorkInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutFacilityToCoWorkInput
    connect?: CoWorkWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutFacilityToCoWorkInput = {
    create?: XOR<FacilityCreateWithoutFacilityToCoWorkInput, FacilityUncheckedCreateWithoutFacilityToCoWorkInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutFacilityToCoWorkInput
    connect?: FacilityWhereUniqueInput
  }

  export type CoWorkUpdateOneRequiredWithoutFacilityToCoWorkNestedInput = {
    create?: XOR<CoWorkCreateWithoutFacilityToCoWorkInput, CoWorkUncheckedCreateWithoutFacilityToCoWorkInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutFacilityToCoWorkInput
    upsert?: CoWorkUpsertWithoutFacilityToCoWorkInput
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutFacilityToCoWorkInput, CoWorkUncheckedUpdateWithoutFacilityToCoWorkInput>
  }

  export type FacilityUpdateOneRequiredWithoutFacilityToCoWorkNestedInput = {
    create?: XOR<FacilityCreateWithoutFacilityToCoWorkInput, FacilityUncheckedCreateWithoutFacilityToCoWorkInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutFacilityToCoWorkInput
    upsert?: FacilityUpsertWithoutFacilityToCoWorkInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<FacilityUpdateWithoutFacilityToCoWorkInput, FacilityUncheckedUpdateWithoutFacilityToCoWorkInput>
  }

  export type CoWorkCreateNestedOneWithoutBranchToRoomInput = {
    create?: XOR<CoWorkCreateWithoutBranchToRoomInput, CoWorkUncheckedCreateWithoutBranchToRoomInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutBranchToRoomInput
    connect?: CoWorkWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutBranchToRoomInput = {
    create?: XOR<RoomCreateWithoutBranchToRoomInput, RoomUncheckedCreateWithoutBranchToRoomInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBranchToRoomInput
    connect?: RoomWhereUniqueInput
  }

  export type CoWorkUpdateOneRequiredWithoutBranchToRoomNestedInput = {
    create?: XOR<CoWorkCreateWithoutBranchToRoomInput, CoWorkUncheckedCreateWithoutBranchToRoomInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutBranchToRoomInput
    upsert?: CoWorkUpsertWithoutBranchToRoomInput
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutBranchToRoomInput, CoWorkUncheckedUpdateWithoutBranchToRoomInput>
  }

  export type RoomUpdateOneRequiredWithoutBranchToRoomNestedInput = {
    create?: XOR<RoomCreateWithoutBranchToRoomInput, RoomUncheckedCreateWithoutBranchToRoomInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBranchToRoomInput
    upsert?: RoomUpsertWithoutBranchToRoomInput
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutBranchToRoomInput, RoomUncheckedUpdateWithoutBranchToRoomInput>
  }

  export type RoomCreateNestedOneWithoutBookRoomInput = {
    create?: XOR<RoomCreateWithoutBookRoomInput, RoomUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookRoomInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomRateCreateNestedOneWithoutBookRoomInput = {
    create?: XOR<RoomRateCreateWithoutBookRoomInput, RoomRateUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: RoomRateCreateOrConnectWithoutBookRoomInput
    connect?: RoomRateWhereUniqueInput
  }

  export type UserExternalCreateNestedOneWithoutBookRoomInput = {
    create?: XOR<UserExternalCreateWithoutBookRoomInput, UserExternalUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: UserExternalCreateOrConnectWithoutBookRoomInput
    connect?: UserExternalWhereUniqueInput
  }

  export type VertifyBookingCodeCreateNestedOneWithoutBookRoomInput = {
    create?: XOR<VertifyBookingCodeCreateWithoutBookRoomInput, VertifyBookingCodeUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: VertifyBookingCodeCreateOrConnectWithoutBookRoomInput
    connect?: VertifyBookingCodeWhereUniqueInput
  }

  export type RoomUpdateOneWithoutBookRoomNestedInput = {
    create?: XOR<RoomCreateWithoutBookRoomInput, RoomUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookRoomInput
    upsert?: RoomUpsertWithoutBookRoomInput
    disconnect?: boolean
    delete?: boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutBookRoomInput, RoomUncheckedUpdateWithoutBookRoomInput>
  }

  export type RoomRateUpdateOneRequiredWithoutBookRoomNestedInput = {
    create?: XOR<RoomRateCreateWithoutBookRoomInput, RoomRateUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: RoomRateCreateOrConnectWithoutBookRoomInput
    upsert?: RoomRateUpsertWithoutBookRoomInput
    connect?: RoomRateWhereUniqueInput
    update?: XOR<RoomRateUpdateWithoutBookRoomInput, RoomRateUncheckedUpdateWithoutBookRoomInput>
  }

  export type UserExternalUpdateOneRequiredWithoutBookRoomNestedInput = {
    create?: XOR<UserExternalCreateWithoutBookRoomInput, UserExternalUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: UserExternalCreateOrConnectWithoutBookRoomInput
    upsert?: UserExternalUpsertWithoutBookRoomInput
    connect?: UserExternalWhereUniqueInput
    update?: XOR<UserExternalUpdateWithoutBookRoomInput, UserExternalUncheckedUpdateWithoutBookRoomInput>
  }

  export type VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput = {
    create?: XOR<VertifyBookingCodeCreateWithoutBookRoomInput, VertifyBookingCodeUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: VertifyBookingCodeCreateOrConnectWithoutBookRoomInput
    upsert?: VertifyBookingCodeUpsertWithoutBookRoomInput
    connect?: VertifyBookingCodeWhereUniqueInput
    update?: XOR<VertifyBookingCodeUpdateWithoutBookRoomInput, VertifyBookingCodeUncheckedUpdateWithoutBookRoomInput>
  }

  export type BookRoomCreateNestedManyWithoutVertifyCodeInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutVertifyCodeInput>, Enumerable<BookRoomUncheckedCreateWithoutVertifyCodeInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutVertifyCodeInput>
    createMany?: BookRoomCreateManyVertifyCodeInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BookRoomUncheckedCreateNestedManyWithoutVertifyCodeInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutVertifyCodeInput>, Enumerable<BookRoomUncheckedCreateWithoutVertifyCodeInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutVertifyCodeInput>
    createMany?: BookRoomCreateManyVertifyCodeInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BookRoomUpdateManyWithoutVertifyCodeNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutVertifyCodeInput>, Enumerable<BookRoomUncheckedCreateWithoutVertifyCodeInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutVertifyCodeInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutVertifyCodeInput>
    createMany?: BookRoomCreateManyVertifyCodeInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutVertifyCodeInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutVertifyCodeInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type BookRoomUncheckedUpdateManyWithoutVertifyCodeNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutVertifyCodeInput>, Enumerable<BookRoomUncheckedCreateWithoutVertifyCodeInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutVertifyCodeInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutVertifyCodeInput>
    createMany?: BookRoomCreateManyVertifyCodeInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutVertifyCodeInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutVertifyCodeInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type CoWorkCreateNestedOneWithoutOpenInput = {
    create?: XOR<CoWorkCreateWithoutOpenInput, CoWorkUncheckedCreateWithoutOpenInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutOpenInput
    connect?: CoWorkWhereUniqueInput
  }

  export type CoWorkUpdateOneRequiredWithoutOpenNestedInput = {
    create?: XOR<CoWorkCreateWithoutOpenInput, CoWorkUncheckedCreateWithoutOpenInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutOpenInput
    upsert?: CoWorkUpsertWithoutOpenInput
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutOpenInput, CoWorkUncheckedUpdateWithoutOpenInput>
  }

  export type CoWorkCreateNestedOneWithoutCloseInput = {
    create?: XOR<CoWorkCreateWithoutCloseInput, CoWorkUncheckedCreateWithoutCloseInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutCloseInput
    connect?: CoWorkWhereUniqueInput
  }

  export type CoWorkUpdateOneRequiredWithoutCloseNestedInput = {
    create?: XOR<CoWorkCreateWithoutCloseInput, CoWorkUncheckedCreateWithoutCloseInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutCloseInput
    upsert?: CoWorkUpsertWithoutCloseInput
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutCloseInput, CoWorkUncheckedUpdateWithoutCloseInput>
  }

  export type CoWorkCreateNestedOneWithoutOpenClose24HoursInput = {
    create?: XOR<CoWorkCreateWithoutOpenClose24HoursInput, CoWorkUncheckedCreateWithoutOpenClose24HoursInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutOpenClose24HoursInput
    connect?: CoWorkWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CoWorkUpdateOneRequiredWithoutOpenClose24HoursNestedInput = {
    create?: XOR<CoWorkCreateWithoutOpenClose24HoursInput, CoWorkUncheckedCreateWithoutOpenClose24HoursInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutOpenClose24HoursInput
    upsert?: CoWorkUpsertWithoutOpenClose24HoursInput
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutOpenClose24HoursInput, CoWorkUncheckedUpdateWithoutOpenClose24HoursInput>
  }

  export type CoWorkCreateNestedOneWithoutOpenCloseBooleanInput = {
    create?: XOR<CoWorkCreateWithoutOpenCloseBooleanInput, CoWorkUncheckedCreateWithoutOpenCloseBooleanInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutOpenCloseBooleanInput
    connect?: CoWorkWhereUniqueInput
  }

  export type CoWorkUpdateOneRequiredWithoutOpenCloseBooleanNestedInput = {
    create?: XOR<CoWorkCreateWithoutOpenCloseBooleanInput, CoWorkUncheckedCreateWithoutOpenCloseBooleanInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutOpenCloseBooleanInput
    upsert?: CoWorkUpsertWithoutOpenCloseBooleanInput
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutOpenCloseBooleanInput, CoWorkUncheckedUpdateWithoutOpenCloseBooleanInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BookRoomCreateWithoutUserExternalInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    price?: number | null
    room?: RoomCreateNestedOneWithoutBookRoomInput
    roomRate: RoomRateCreateNestedOneWithoutBookRoomInput
    vertifyCode: VertifyBookingCodeCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateWithoutUserExternalInput = {
    id?: number
    startTime: Date | string
    roomId?: number | null
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    vertifyBookingCodeId: number
    price?: number | null
  }

  export type BookRoomCreateOrConnectWithoutUserExternalInput = {
    where: BookRoomWhereUniqueInput
    create: XOR<BookRoomCreateWithoutUserExternalInput, BookRoomUncheckedCreateWithoutUserExternalInput>
  }

  export type BookRoomCreateManyUserExternalInputEnvelope = {
    data: Enumerable<BookRoomCreateManyUserExternalInput>
    skipDuplicates?: boolean
  }

  export type BookRoomUpsertWithWhereUniqueWithoutUserExternalInput = {
    where: BookRoomWhereUniqueInput
    update: XOR<BookRoomUpdateWithoutUserExternalInput, BookRoomUncheckedUpdateWithoutUserExternalInput>
    create: XOR<BookRoomCreateWithoutUserExternalInput, BookRoomUncheckedCreateWithoutUserExternalInput>
  }

  export type BookRoomUpdateWithWhereUniqueWithoutUserExternalInput = {
    where: BookRoomWhereUniqueInput
    data: XOR<BookRoomUpdateWithoutUserExternalInput, BookRoomUncheckedUpdateWithoutUserExternalInput>
  }

  export type BookRoomUpdateManyWithWhereWithoutUserExternalInput = {
    where: BookRoomScalarWhereInput
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyWithoutBookRoomInput>
  }

  export type BookRoomScalarWhereInput = {
    AND?: Enumerable<BookRoomScalarWhereInput>
    OR?: Enumerable<BookRoomScalarWhereInput>
    NOT?: Enumerable<BookRoomScalarWhereInput>
    id?: IntFilter | number
    startTime?: DateTimeFilter | Date | string
    roomId?: IntNullableFilter | number | null
    roomRateId?: IntFilter | number
    status?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    userExternalId?: IntFilter | number
    vertifyBookingCodeId?: IntFilter | number
    price?: IntNullableFilter | number | null
  }

  export type BranchToRoomCreateWithoutCoWorkInput = {
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
    room: RoomCreateNestedOneWithoutBranchToRoomInput
  }

  export type BranchToRoomUncheckedCreateWithoutCoWorkInput = {
    id?: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
  }

  export type BranchToRoomCreateOrConnectWithoutCoWorkInput = {
    where: BranchToRoomWhereUniqueInput
    create: XOR<BranchToRoomCreateWithoutCoWorkInput, BranchToRoomUncheckedCreateWithoutCoWorkInput>
  }

  export type BranchToRoomCreateManyCoWorkInputEnvelope = {
    data: Enumerable<BranchToRoomCreateManyCoWorkInput>
    skipDuplicates?: boolean
  }

  export type FacilityToCoWorkCreateWithoutCoWorkInput = {
    createAt?: Date | string
    updateAt?: Date | string
    facility: FacilityCreateNestedOneWithoutFacilityToCoWorkInput
  }

  export type FacilityToCoWorkUncheckedCreateWithoutCoWorkInput = {
    id?: number
    facilityId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToCoWorkCreateOrConnectWithoutCoWorkInput = {
    where: FacilityToCoWorkWhereUniqueInput
    create: XOR<FacilityToCoWorkCreateWithoutCoWorkInput, FacilityToCoWorkUncheckedCreateWithoutCoWorkInput>
  }

  export type FacilityToCoWorkCreateManyCoWorkInputEnvelope = {
    data: Enumerable<FacilityToCoWorkCreateManyCoWorkInput>
    skipDuplicates?: boolean
  }

  export type UserInternalCreateWithoutCoWorkInput = {
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserInternalUncheckedCreateWithoutCoWorkInput = {
    id?: number
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserInternalCreateOrConnectWithoutCoWorkInput = {
    where: UserInternalWhereUniqueInput
    create: XOR<UserInternalCreateWithoutCoWorkInput, UserInternalUncheckedCreateWithoutCoWorkInput>
  }

  export type CloseCreateWithoutCoworkInput = {
    monClose: number
    tueClose: number
    wedClose: number
    thursClose: number
    friClose: number
    satClose: number
    sunClose: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CloseUncheckedCreateWithoutCoworkInput = {
    id?: number
    monClose: number
    tueClose: number
    wedClose: number
    thursClose: number
    friClose: number
    satClose: number
    sunClose: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CloseCreateOrConnectWithoutCoworkInput = {
    where: CloseWhereUniqueInput
    create: XOR<CloseCreateWithoutCoworkInput, CloseUncheckedCreateWithoutCoworkInput>
  }

  export type OpenCreateWithoutCoworkInput = {
    monOpen: number
    tueOpen: number
    wedOpen: number
    thursOpen: number
    friOpen: number
    satOpen: number
    sunOpen: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenUncheckedCreateWithoutCoworkInput = {
    id?: number
    monOpen: number
    tueOpen: number
    wedOpen: number
    thursOpen: number
    friOpen: number
    satOpen: number
    sunOpen: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCreateOrConnectWithoutCoworkInput = {
    where: OpenWhereUniqueInput
    create: XOR<OpenCreateWithoutCoworkInput, OpenUncheckedCreateWithoutCoworkInput>
  }

  export type OpenClose24HoursCreateWithoutCoworkInput = {
    mon24hours: boolean
    tue24hours: boolean
    wed24hours: boolean
    thurs24hours: boolean
    fri24hours: boolean
    sat24hours: boolean
    sun24hours: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenClose24HoursUncheckedCreateWithoutCoworkInput = {
    id?: number
    mon24hours: boolean
    tue24hours: boolean
    wed24hours: boolean
    thurs24hours: boolean
    fri24hours: boolean
    sat24hours: boolean
    sun24hours: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenClose24HoursCreateOrConnectWithoutCoworkInput = {
    where: OpenClose24HoursWhereUniqueInput
    create: XOR<OpenClose24HoursCreateWithoutCoworkInput, OpenClose24HoursUncheckedCreateWithoutCoworkInput>
  }

  export type OpenCloseBooleanCreateWithoutCoworkInput = {
    monOnOff: boolean
    tueOnOff: boolean
    wedOnOff: boolean
    thursOnOff: boolean
    friOnOff: boolean
    satOnOff: boolean
    sunOnOff: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCloseBooleanUncheckedCreateWithoutCoworkInput = {
    id?: number
    monOnOff: boolean
    tueOnOff: boolean
    wedOnOff: boolean
    thursOnOff: boolean
    friOnOff: boolean
    satOnOff: boolean
    sunOnOff: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCloseBooleanCreateOrConnectWithoutCoworkInput = {
    where: OpenCloseBooleanWhereUniqueInput
    create: XOR<OpenCloseBooleanCreateWithoutCoworkInput, OpenCloseBooleanUncheckedCreateWithoutCoworkInput>
  }

  export type BranchToRoomUpsertWithWhereUniqueWithoutCoWorkInput = {
    where: BranchToRoomWhereUniqueInput
    update: XOR<BranchToRoomUpdateWithoutCoWorkInput, BranchToRoomUncheckedUpdateWithoutCoWorkInput>
    create: XOR<BranchToRoomCreateWithoutCoWorkInput, BranchToRoomUncheckedCreateWithoutCoWorkInput>
  }

  export type BranchToRoomUpdateWithWhereUniqueWithoutCoWorkInput = {
    where: BranchToRoomWhereUniqueInput
    data: XOR<BranchToRoomUpdateWithoutCoWorkInput, BranchToRoomUncheckedUpdateWithoutCoWorkInput>
  }

  export type BranchToRoomUpdateManyWithWhereWithoutCoWorkInput = {
    where: BranchToRoomScalarWhereInput
    data: XOR<BranchToRoomUpdateManyMutationInput, BranchToRoomUncheckedUpdateManyWithoutBranchToRoomInput>
  }

  export type BranchToRoomScalarWhereInput = {
    AND?: Enumerable<BranchToRoomScalarWhereInput>
    OR?: Enumerable<BranchToRoomScalarWhereInput>
    NOT?: Enumerable<BranchToRoomScalarWhereInput>
    id?: IntFilter | number
    coWorkId?: IntFilter | number
    roomId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    active?: BoolNullableFilter | boolean | null
  }

  export type FacilityToCoWorkUpsertWithWhereUniqueWithoutCoWorkInput = {
    where: FacilityToCoWorkWhereUniqueInput
    update: XOR<FacilityToCoWorkUpdateWithoutCoWorkInput, FacilityToCoWorkUncheckedUpdateWithoutCoWorkInput>
    create: XOR<FacilityToCoWorkCreateWithoutCoWorkInput, FacilityToCoWorkUncheckedCreateWithoutCoWorkInput>
  }

  export type FacilityToCoWorkUpdateWithWhereUniqueWithoutCoWorkInput = {
    where: FacilityToCoWorkWhereUniqueInput
    data: XOR<FacilityToCoWorkUpdateWithoutCoWorkInput, FacilityToCoWorkUncheckedUpdateWithoutCoWorkInput>
  }

  export type FacilityToCoWorkUpdateManyWithWhereWithoutCoWorkInput = {
    where: FacilityToCoWorkScalarWhereInput
    data: XOR<FacilityToCoWorkUpdateManyMutationInput, FacilityToCoWorkUncheckedUpdateManyWithoutFacilityToCoWorkInput>
  }

  export type FacilityToCoWorkScalarWhereInput = {
    AND?: Enumerable<FacilityToCoWorkScalarWhereInput>
    OR?: Enumerable<FacilityToCoWorkScalarWhereInput>
    NOT?: Enumerable<FacilityToCoWorkScalarWhereInput>
    id?: IntFilter | number
    coWorkId?: IntFilter | number
    facilityId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type UserInternalUpsertWithoutCoWorkInput = {
    update: XOR<UserInternalUpdateWithoutCoWorkInput, UserInternalUncheckedUpdateWithoutCoWorkInput>
    create: XOR<UserInternalCreateWithoutCoWorkInput, UserInternalUncheckedCreateWithoutCoWorkInput>
  }

  export type UserInternalUpdateWithoutCoWorkInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInternalUncheckedUpdateWithoutCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseUpsertWithoutCoworkInput = {
    update: XOR<CloseUpdateWithoutCoworkInput, CloseUncheckedUpdateWithoutCoworkInput>
    create: XOR<CloseCreateWithoutCoworkInput, CloseUncheckedCreateWithoutCoworkInput>
  }

  export type CloseUpdateWithoutCoworkInput = {
    monClose?: IntFieldUpdateOperationsInput | number
    tueClose?: IntFieldUpdateOperationsInput | number
    wedClose?: IntFieldUpdateOperationsInput | number
    thursClose?: IntFieldUpdateOperationsInput | number
    friClose?: IntFieldUpdateOperationsInput | number
    satClose?: IntFieldUpdateOperationsInput | number
    sunClose?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseUncheckedUpdateWithoutCoworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    monClose?: IntFieldUpdateOperationsInput | number
    tueClose?: IntFieldUpdateOperationsInput | number
    wedClose?: IntFieldUpdateOperationsInput | number
    thursClose?: IntFieldUpdateOperationsInput | number
    friClose?: IntFieldUpdateOperationsInput | number
    satClose?: IntFieldUpdateOperationsInput | number
    sunClose?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenUpsertWithoutCoworkInput = {
    update: XOR<OpenUpdateWithoutCoworkInput, OpenUncheckedUpdateWithoutCoworkInput>
    create: XOR<OpenCreateWithoutCoworkInput, OpenUncheckedCreateWithoutCoworkInput>
  }

  export type OpenUpdateWithoutCoworkInput = {
    monOpen?: IntFieldUpdateOperationsInput | number
    tueOpen?: IntFieldUpdateOperationsInput | number
    wedOpen?: IntFieldUpdateOperationsInput | number
    thursOpen?: IntFieldUpdateOperationsInput | number
    friOpen?: IntFieldUpdateOperationsInput | number
    satOpen?: IntFieldUpdateOperationsInput | number
    sunOpen?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenUncheckedUpdateWithoutCoworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    monOpen?: IntFieldUpdateOperationsInput | number
    tueOpen?: IntFieldUpdateOperationsInput | number
    wedOpen?: IntFieldUpdateOperationsInput | number
    thursOpen?: IntFieldUpdateOperationsInput | number
    friOpen?: IntFieldUpdateOperationsInput | number
    satOpen?: IntFieldUpdateOperationsInput | number
    sunOpen?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenClose24HoursUpsertWithoutCoworkInput = {
    update: XOR<OpenClose24HoursUpdateWithoutCoworkInput, OpenClose24HoursUncheckedUpdateWithoutCoworkInput>
    create: XOR<OpenClose24HoursCreateWithoutCoworkInput, OpenClose24HoursUncheckedCreateWithoutCoworkInput>
  }

  export type OpenClose24HoursUpdateWithoutCoworkInput = {
    mon24hours?: BoolFieldUpdateOperationsInput | boolean
    tue24hours?: BoolFieldUpdateOperationsInput | boolean
    wed24hours?: BoolFieldUpdateOperationsInput | boolean
    thurs24hours?: BoolFieldUpdateOperationsInput | boolean
    fri24hours?: BoolFieldUpdateOperationsInput | boolean
    sat24hours?: BoolFieldUpdateOperationsInput | boolean
    sun24hours?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenClose24HoursUncheckedUpdateWithoutCoworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    mon24hours?: BoolFieldUpdateOperationsInput | boolean
    tue24hours?: BoolFieldUpdateOperationsInput | boolean
    wed24hours?: BoolFieldUpdateOperationsInput | boolean
    thurs24hours?: BoolFieldUpdateOperationsInput | boolean
    fri24hours?: BoolFieldUpdateOperationsInput | boolean
    sat24hours?: BoolFieldUpdateOperationsInput | boolean
    sun24hours?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCloseBooleanUpsertWithoutCoworkInput = {
    update: XOR<OpenCloseBooleanUpdateWithoutCoworkInput, OpenCloseBooleanUncheckedUpdateWithoutCoworkInput>
    create: XOR<OpenCloseBooleanCreateWithoutCoworkInput, OpenCloseBooleanUncheckedCreateWithoutCoworkInput>
  }

  export type OpenCloseBooleanUpdateWithoutCoworkInput = {
    monOnOff?: BoolFieldUpdateOperationsInput | boolean
    tueOnOff?: BoolFieldUpdateOperationsInput | boolean
    wedOnOff?: BoolFieldUpdateOperationsInput | boolean
    thursOnOff?: BoolFieldUpdateOperationsInput | boolean
    friOnOff?: BoolFieldUpdateOperationsInput | boolean
    satOnOff?: BoolFieldUpdateOperationsInput | boolean
    sunOnOff?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCloseBooleanUncheckedUpdateWithoutCoworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    monOnOff?: BoolFieldUpdateOperationsInput | boolean
    tueOnOff?: BoolFieldUpdateOperationsInput | boolean
    wedOnOff?: BoolFieldUpdateOperationsInput | boolean
    thursOnOff?: BoolFieldUpdateOperationsInput | boolean
    friOnOff?: BoolFieldUpdateOperationsInput | boolean
    satOnOff?: BoolFieldUpdateOperationsInput | boolean
    sunOnOff?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoWorkCreateWithoutUserInternalInput = {
    name: string
    description: string
    location: string
    tel: string
    picture: string
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkCreateNestedManyWithoutCoWorkInput
    Close?: CloseCreateNestedOneWithoutCoworkInput
    Open?: OpenCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUncheckedCreateWithoutUserInternalInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedCreateNestedManyWithoutCoWorkInput
    Close?: CloseUncheckedCreateNestedOneWithoutCoworkInput
    Open?: OpenUncheckedCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursUncheckedCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkCreateOrConnectWithoutUserInternalInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutUserInternalInput, CoWorkUncheckedCreateWithoutUserInternalInput>
  }

  export type CoWorkUpsertWithoutUserInternalInput = {
    update: XOR<CoWorkUpdateWithoutUserInternalInput, CoWorkUncheckedUpdateWithoutUserInternalInput>
    create: XOR<CoWorkCreateWithoutUserInternalInput, CoWorkUncheckedCreateWithoutUserInternalInput>
  }

  export type CoWorkUpdateWithoutUserInternalInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUpdateManyWithoutCoWorkNestedInput
    Close?: CloseUpdateOneWithoutCoworkNestedInput
    Open?: OpenUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutUserInternalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedUpdateManyWithoutCoWorkNestedInput
    Close?: CloseUncheckedUpdateOneWithoutCoworkNestedInput
    Open?: OpenUncheckedUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUncheckedUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedUpdateOneWithoutCoworkNestedInput
  }

  export type BranchToRoomCreateWithoutRoomInput = {
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
    coWork: CoWorkCreateNestedOneWithoutBranchToRoomInput
  }

  export type BranchToRoomUncheckedCreateWithoutRoomInput = {
    id?: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
  }

  export type BranchToRoomCreateOrConnectWithoutRoomInput = {
    where: BranchToRoomWhereUniqueInput
    create: XOR<BranchToRoomCreateWithoutRoomInput, BranchToRoomUncheckedCreateWithoutRoomInput>
  }

  export type RoomRateCreateWithoutRoomInput = {
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
    BookRoom?: BookRoomCreateNestedManyWithoutRoomRateInput
    duration: durationCategoryCreateNestedOneWithoutRoomRateInput
  }

  export type RoomRateUncheckedCreateWithoutRoomInput = {
    id?: number
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    durationCategoryId: number
    active?: boolean | null
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutRoomRateInput
  }

  export type RoomRateCreateOrConnectWithoutRoomInput = {
    where: RoomRateWhereUniqueInput
    create: XOR<RoomRateCreateWithoutRoomInput, RoomRateUncheckedCreateWithoutRoomInput>
  }

  export type RoomRateCreateManyRoomInputEnvelope = {
    data: Enumerable<RoomRateCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type BookRoomCreateWithoutRoomInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    price?: number | null
    roomRate: RoomRateCreateNestedOneWithoutBookRoomInput
    UserExternal: UserExternalCreateNestedOneWithoutBookRoomInput
    vertifyCode: VertifyBookingCodeCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateWithoutRoomInput = {
    id?: number
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
    price?: number | null
  }

  export type BookRoomCreateOrConnectWithoutRoomInput = {
    where: BookRoomWhereUniqueInput
    create: XOR<BookRoomCreateWithoutRoomInput, BookRoomUncheckedCreateWithoutRoomInput>
  }

  export type BookRoomCreateManyRoomInputEnvelope = {
    data: Enumerable<BookRoomCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type BranchToRoomUpsertWithoutRoomInput = {
    update: XOR<BranchToRoomUpdateWithoutRoomInput, BranchToRoomUncheckedUpdateWithoutRoomInput>
    create: XOR<BranchToRoomCreateWithoutRoomInput, BranchToRoomUncheckedCreateWithoutRoomInput>
  }

  export type BranchToRoomUpdateWithoutRoomInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    coWork?: CoWorkUpdateOneRequiredWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RoomRateUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomRateWhereUniqueInput
    update: XOR<RoomRateUpdateWithoutRoomInput, RoomRateUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomRateCreateWithoutRoomInput, RoomRateUncheckedCreateWithoutRoomInput>
  }

  export type RoomRateUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomRateWhereUniqueInput
    data: XOR<RoomRateUpdateWithoutRoomInput, RoomRateUncheckedUpdateWithoutRoomInput>
  }

  export type RoomRateUpdateManyWithWhereWithoutRoomInput = {
    where: RoomRateScalarWhereInput
    data: XOR<RoomRateUpdateManyMutationInput, RoomRateUncheckedUpdateManyWithoutRoomRateInput>
  }

  export type RoomRateScalarWhereInput = {
    AND?: Enumerable<RoomRateScalarWhereInput>
    OR?: Enumerable<RoomRateScalarWhereInput>
    NOT?: Enumerable<RoomRateScalarWhereInput>
    id?: IntFilter | number
    price?: IntNullableFilter | number | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    durationCategoryId?: IntFilter | number
    roomId?: IntNullableFilter | number | null
    active?: BoolNullableFilter | boolean | null
  }

  export type BookRoomUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookRoomWhereUniqueInput
    update: XOR<BookRoomUpdateWithoutRoomInput, BookRoomUncheckedUpdateWithoutRoomInput>
    create: XOR<BookRoomCreateWithoutRoomInput, BookRoomUncheckedCreateWithoutRoomInput>
  }

  export type BookRoomUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookRoomWhereUniqueInput
    data: XOR<BookRoomUpdateWithoutRoomInput, BookRoomUncheckedUpdateWithoutRoomInput>
  }

  export type BookRoomUpdateManyWithWhereWithoutRoomInput = {
    where: BookRoomScalarWhereInput
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyWithoutBookRoomInput>
  }

  export type BookRoomCreateWithoutRoomRateInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    price?: number | null
    room?: RoomCreateNestedOneWithoutBookRoomInput
    UserExternal: UserExternalCreateNestedOneWithoutBookRoomInput
    vertifyCode: VertifyBookingCodeCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateWithoutRoomRateInput = {
    id?: number
    startTime: Date | string
    roomId?: number | null
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
    price?: number | null
  }

  export type BookRoomCreateOrConnectWithoutRoomRateInput = {
    where: BookRoomWhereUniqueInput
    create: XOR<BookRoomCreateWithoutRoomRateInput, BookRoomUncheckedCreateWithoutRoomRateInput>
  }

  export type BookRoomCreateManyRoomRateInputEnvelope = {
    data: Enumerable<BookRoomCreateManyRoomRateInput>
    skipDuplicates?: boolean
  }

  export type durationCategoryCreateWithoutRoomRateInput = {
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type durationCategoryUncheckedCreateWithoutRoomRateInput = {
    id?: number
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type durationCategoryCreateOrConnectWithoutRoomRateInput = {
    where: durationCategoryWhereUniqueInput
    create: XOR<durationCategoryCreateWithoutRoomRateInput, durationCategoryUncheckedCreateWithoutRoomRateInput>
  }

  export type RoomCreateWithoutRoomRateInput = {
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    BranchToRoom?: BranchToRoomCreateNestedOneWithoutRoomInput
    BookRoom?: BookRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomRateInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    BranchToRoom?: BranchToRoomUncheckedCreateNestedOneWithoutRoomInput
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomRateInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomRateInput, RoomUncheckedCreateWithoutRoomRateInput>
  }

  export type BookRoomUpsertWithWhereUniqueWithoutRoomRateInput = {
    where: BookRoomWhereUniqueInput
    update: XOR<BookRoomUpdateWithoutRoomRateInput, BookRoomUncheckedUpdateWithoutRoomRateInput>
    create: XOR<BookRoomCreateWithoutRoomRateInput, BookRoomUncheckedCreateWithoutRoomRateInput>
  }

  export type BookRoomUpdateWithWhereUniqueWithoutRoomRateInput = {
    where: BookRoomWhereUniqueInput
    data: XOR<BookRoomUpdateWithoutRoomRateInput, BookRoomUncheckedUpdateWithoutRoomRateInput>
  }

  export type BookRoomUpdateManyWithWhereWithoutRoomRateInput = {
    where: BookRoomScalarWhereInput
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyWithoutBookRoomInput>
  }

  export type durationCategoryUpsertWithoutRoomRateInput = {
    update: XOR<durationCategoryUpdateWithoutRoomRateInput, durationCategoryUncheckedUpdateWithoutRoomRateInput>
    create: XOR<durationCategoryCreateWithoutRoomRateInput, durationCategoryUncheckedCreateWithoutRoomRateInput>
  }

  export type durationCategoryUpdateWithoutRoomRateInput = {
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type durationCategoryUncheckedUpdateWithoutRoomRateInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpsertWithoutRoomRateInput = {
    update: XOR<RoomUpdateWithoutRoomRateInput, RoomUncheckedUpdateWithoutRoomRateInput>
    create: XOR<RoomCreateWithoutRoomRateInput, RoomUncheckedCreateWithoutRoomRateInput>
  }

  export type RoomUpdateWithoutRoomRateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchToRoom?: BranchToRoomUpdateOneWithoutRoomNestedInput
    BookRoom?: BookRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomRateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchToRoom?: BranchToRoomUncheckedUpdateOneWithoutRoomNestedInput
    BookRoom?: BookRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomRateCreateWithoutDurationInput = {
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
    BookRoom?: BookRoomCreateNestedManyWithoutRoomRateInput
    room?: RoomCreateNestedOneWithoutRoomRateInput
  }

  export type RoomRateUncheckedCreateWithoutDurationInput = {
    id?: number
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    roomId?: number | null
    active?: boolean | null
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutRoomRateInput
  }

  export type RoomRateCreateOrConnectWithoutDurationInput = {
    where: RoomRateWhereUniqueInput
    create: XOR<RoomRateCreateWithoutDurationInput, RoomRateUncheckedCreateWithoutDurationInput>
  }

  export type RoomRateCreateManyDurationInputEnvelope = {
    data: Enumerable<RoomRateCreateManyDurationInput>
    skipDuplicates?: boolean
  }

  export type RoomRateUpsertWithWhereUniqueWithoutDurationInput = {
    where: RoomRateWhereUniqueInput
    update: XOR<RoomRateUpdateWithoutDurationInput, RoomRateUncheckedUpdateWithoutDurationInput>
    create: XOR<RoomRateCreateWithoutDurationInput, RoomRateUncheckedCreateWithoutDurationInput>
  }

  export type RoomRateUpdateWithWhereUniqueWithoutDurationInput = {
    where: RoomRateWhereUniqueInput
    data: XOR<RoomRateUpdateWithoutDurationInput, RoomRateUncheckedUpdateWithoutDurationInput>
  }

  export type RoomRateUpdateManyWithWhereWithoutDurationInput = {
    where: RoomRateScalarWhereInput
    data: XOR<RoomRateUpdateManyMutationInput, RoomRateUncheckedUpdateManyWithoutRoomRateInput>
  }

  export type FacilityToCoWorkCreateWithoutFacilityInput = {
    createAt?: Date | string
    updateAt?: Date | string
    coWork: CoWorkCreateNestedOneWithoutFacilityToCoWorkInput
  }

  export type FacilityToCoWorkUncheckedCreateWithoutFacilityInput = {
    id?: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToCoWorkCreateOrConnectWithoutFacilityInput = {
    where: FacilityToCoWorkWhereUniqueInput
    create: XOR<FacilityToCoWorkCreateWithoutFacilityInput, FacilityToCoWorkUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityToCoWorkCreateManyFacilityInputEnvelope = {
    data: Enumerable<FacilityToCoWorkCreateManyFacilityInput>
    skipDuplicates?: boolean
  }

  export type FacilityToCoWorkUpsertWithWhereUniqueWithoutFacilityInput = {
    where: FacilityToCoWorkWhereUniqueInput
    update: XOR<FacilityToCoWorkUpdateWithoutFacilityInput, FacilityToCoWorkUncheckedUpdateWithoutFacilityInput>
    create: XOR<FacilityToCoWorkCreateWithoutFacilityInput, FacilityToCoWorkUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityToCoWorkUpdateWithWhereUniqueWithoutFacilityInput = {
    where: FacilityToCoWorkWhereUniqueInput
    data: XOR<FacilityToCoWorkUpdateWithoutFacilityInput, FacilityToCoWorkUncheckedUpdateWithoutFacilityInput>
  }

  export type FacilityToCoWorkUpdateManyWithWhereWithoutFacilityInput = {
    where: FacilityToCoWorkScalarWhereInput
    data: XOR<FacilityToCoWorkUpdateManyMutationInput, FacilityToCoWorkUncheckedUpdateManyWithoutFacilityToCoWorkInput>
  }

  export type CoWorkCreateWithoutFacilityToCoWorkInput = {
    name: string
    description: string
    location: string
    tel: string
    picture: string
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    userInternal?: UserInternalCreateNestedOneWithoutCoWorkInput
    Close?: CloseCreateNestedOneWithoutCoworkInput
    Open?: OpenCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUncheckedCreateWithoutFacilityToCoWorkInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId?: number | null
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    Close?: CloseUncheckedCreateNestedOneWithoutCoworkInput
    Open?: OpenUncheckedCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursUncheckedCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkCreateOrConnectWithoutFacilityToCoWorkInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutFacilityToCoWorkInput, CoWorkUncheckedCreateWithoutFacilityToCoWorkInput>
  }

  export type FacilityCreateWithoutFacilityToCoWorkInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityUncheckedCreateWithoutFacilityToCoWorkInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityCreateOrConnectWithoutFacilityToCoWorkInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutFacilityToCoWorkInput, FacilityUncheckedCreateWithoutFacilityToCoWorkInput>
  }

  export type CoWorkUpsertWithoutFacilityToCoWorkInput = {
    update: XOR<CoWorkUpdateWithoutFacilityToCoWorkInput, CoWorkUncheckedUpdateWithoutFacilityToCoWorkInput>
    create: XOR<CoWorkCreateWithoutFacilityToCoWorkInput, CoWorkUncheckedCreateWithoutFacilityToCoWorkInput>
  }

  export type CoWorkUpdateWithoutFacilityToCoWorkInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    userInternal?: UserInternalUpdateOneWithoutCoWorkNestedInput
    Close?: CloseUpdateOneWithoutCoworkNestedInput
    Open?: OpenUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutFacilityToCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: NullableIntFieldUpdateOperationsInput | number | null
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    Close?: CloseUncheckedUpdateOneWithoutCoworkNestedInput
    Open?: OpenUncheckedUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUncheckedUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedUpdateOneWithoutCoworkNestedInput
  }

  export type FacilityUpsertWithoutFacilityToCoWorkInput = {
    update: XOR<FacilityUpdateWithoutFacilityToCoWorkInput, FacilityUncheckedUpdateWithoutFacilityToCoWorkInput>
    create: XOR<FacilityCreateWithoutFacilityToCoWorkInput, FacilityUncheckedCreateWithoutFacilityToCoWorkInput>
  }

  export type FacilityUpdateWithoutFacilityToCoWorkInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateWithoutFacilityToCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoWorkCreateWithoutBranchToRoomInput = {
    name: string
    description: string
    location: string
    tel: string
    picture: string
    FacilityToCoWork?: FacilityToCoWorkCreateNestedManyWithoutCoWorkInput
    userInternal?: UserInternalCreateNestedOneWithoutCoWorkInput
    Close?: CloseCreateNestedOneWithoutCoworkInput
    Open?: OpenCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUncheckedCreateWithoutBranchToRoomInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId?: number | null
    FacilityToCoWork?: FacilityToCoWorkUncheckedCreateNestedManyWithoutCoWorkInput
    Close?: CloseUncheckedCreateNestedOneWithoutCoworkInput
    Open?: OpenUncheckedCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursUncheckedCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkCreateOrConnectWithoutBranchToRoomInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutBranchToRoomInput, CoWorkUncheckedCreateWithoutBranchToRoomInput>
  }

  export type RoomCreateWithoutBranchToRoomInput = {
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomRate?: RoomRateCreateNestedManyWithoutRoomInput
    BookRoom?: BookRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBranchToRoomInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomRate?: RoomRateUncheckedCreateNestedManyWithoutRoomInput
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBranchToRoomInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBranchToRoomInput, RoomUncheckedCreateWithoutBranchToRoomInput>
  }

  export type CoWorkUpsertWithoutBranchToRoomInput = {
    update: XOR<CoWorkUpdateWithoutBranchToRoomInput, CoWorkUncheckedUpdateWithoutBranchToRoomInput>
    create: XOR<CoWorkCreateWithoutBranchToRoomInput, CoWorkUncheckedCreateWithoutBranchToRoomInput>
  }

  export type CoWorkUpdateWithoutBranchToRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    FacilityToCoWork?: FacilityToCoWorkUpdateManyWithoutCoWorkNestedInput
    userInternal?: UserInternalUpdateOneWithoutCoWorkNestedInput
    Close?: CloseUpdateOneWithoutCoworkNestedInput
    Open?: OpenUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutBranchToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: NullableIntFieldUpdateOperationsInput | number | null
    FacilityToCoWork?: FacilityToCoWorkUncheckedUpdateManyWithoutCoWorkNestedInput
    Close?: CloseUncheckedUpdateOneWithoutCoworkNestedInput
    Open?: OpenUncheckedUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUncheckedUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedUpdateOneWithoutCoworkNestedInput
  }

  export type RoomUpsertWithoutBranchToRoomInput = {
    update: XOR<RoomUpdateWithoutBranchToRoomInput, RoomUncheckedUpdateWithoutBranchToRoomInput>
    create: XOR<RoomCreateWithoutBranchToRoomInput, RoomUncheckedCreateWithoutBranchToRoomInput>
  }

  export type RoomUpdateWithoutBranchToRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomRate?: RoomRateUpdateManyWithoutRoomNestedInput
    BookRoom?: BookRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBranchToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomRate?: RoomRateUncheckedUpdateManyWithoutRoomNestedInput
    BookRoom?: BookRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutBookRoomInput = {
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    BranchToRoom?: BranchToRoomCreateNestedOneWithoutRoomInput
    RoomRate?: RoomRateCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookRoomInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    BranchToRoom?: BranchToRoomUncheckedCreateNestedOneWithoutRoomInput
    RoomRate?: RoomRateUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookRoomInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookRoomInput, RoomUncheckedCreateWithoutBookRoomInput>
  }

  export type RoomRateCreateWithoutBookRoomInput = {
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
    duration: durationCategoryCreateNestedOneWithoutRoomRateInput
    room?: RoomCreateNestedOneWithoutRoomRateInput
  }

  export type RoomRateUncheckedCreateWithoutBookRoomInput = {
    id?: number
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    durationCategoryId: number
    roomId?: number | null
    active?: boolean | null
  }

  export type RoomRateCreateOrConnectWithoutBookRoomInput = {
    where: RoomRateWhereUniqueInput
    create: XOR<RoomRateCreateWithoutBookRoomInput, RoomRateUncheckedCreateWithoutBookRoomInput>
  }

  export type UserExternalCreateWithoutBookRoomInput = {
    name: string
    email: string
    tel: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserExternalUncheckedCreateWithoutBookRoomInput = {
    id?: number
    name: string
    email: string
    tel: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserExternalCreateOrConnectWithoutBookRoomInput = {
    where: UserExternalWhereUniqueInput
    create: XOR<UserExternalCreateWithoutBookRoomInput, UserExternalUncheckedCreateWithoutBookRoomInput>
  }

  export type VertifyBookingCodeCreateWithoutBookRoomInput = {
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VertifyBookingCodeUncheckedCreateWithoutBookRoomInput = {
    id?: number
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VertifyBookingCodeCreateOrConnectWithoutBookRoomInput = {
    where: VertifyBookingCodeWhereUniqueInput
    create: XOR<VertifyBookingCodeCreateWithoutBookRoomInput, VertifyBookingCodeUncheckedCreateWithoutBookRoomInput>
  }

  export type RoomUpsertWithoutBookRoomInput = {
    update: XOR<RoomUpdateWithoutBookRoomInput, RoomUncheckedUpdateWithoutBookRoomInput>
    create: XOR<RoomCreateWithoutBookRoomInput, RoomUncheckedCreateWithoutBookRoomInput>
  }

  export type RoomUpdateWithoutBookRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchToRoom?: BranchToRoomUpdateOneWithoutRoomNestedInput
    RoomRate?: RoomRateUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchToRoom?: BranchToRoomUncheckedUpdateOneWithoutRoomNestedInput
    RoomRate?: RoomRateUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomRateUpsertWithoutBookRoomInput = {
    update: XOR<RoomRateUpdateWithoutBookRoomInput, RoomRateUncheckedUpdateWithoutBookRoomInput>
    create: XOR<RoomRateCreateWithoutBookRoomInput, RoomRateUncheckedCreateWithoutBookRoomInput>
  }

  export type RoomRateUpdateWithoutBookRoomInput = {
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    duration?: durationCategoryUpdateOneRequiredWithoutRoomRateNestedInput
    room?: RoomUpdateOneWithoutRoomRateNestedInput
  }

  export type RoomRateUncheckedUpdateWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationCategoryId?: IntFieldUpdateOperationsInput | number
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserExternalUpsertWithoutBookRoomInput = {
    update: XOR<UserExternalUpdateWithoutBookRoomInput, UserExternalUncheckedUpdateWithoutBookRoomInput>
    create: XOR<UserExternalCreateWithoutBookRoomInput, UserExternalUncheckedCreateWithoutBookRoomInput>
  }

  export type UserExternalUpdateWithoutBookRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExternalUncheckedUpdateWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VertifyBookingCodeUpsertWithoutBookRoomInput = {
    update: XOR<VertifyBookingCodeUpdateWithoutBookRoomInput, VertifyBookingCodeUncheckedUpdateWithoutBookRoomInput>
    create: XOR<VertifyBookingCodeCreateWithoutBookRoomInput, VertifyBookingCodeUncheckedCreateWithoutBookRoomInput>
  }

  export type VertifyBookingCodeUpdateWithoutBookRoomInput = {
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VertifyBookingCodeUncheckedUpdateWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRoomCreateWithoutVertifyCodeInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    price?: number | null
    room?: RoomCreateNestedOneWithoutBookRoomInput
    roomRate: RoomRateCreateNestedOneWithoutBookRoomInput
    UserExternal: UserExternalCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateWithoutVertifyCodeInput = {
    id?: number
    startTime: Date | string
    roomId?: number | null
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    price?: number | null
  }

  export type BookRoomCreateOrConnectWithoutVertifyCodeInput = {
    where: BookRoomWhereUniqueInput
    create: XOR<BookRoomCreateWithoutVertifyCodeInput, BookRoomUncheckedCreateWithoutVertifyCodeInput>
  }

  export type BookRoomCreateManyVertifyCodeInputEnvelope = {
    data: Enumerable<BookRoomCreateManyVertifyCodeInput>
    skipDuplicates?: boolean
  }

  export type BookRoomUpsertWithWhereUniqueWithoutVertifyCodeInput = {
    where: BookRoomWhereUniqueInput
    update: XOR<BookRoomUpdateWithoutVertifyCodeInput, BookRoomUncheckedUpdateWithoutVertifyCodeInput>
    create: XOR<BookRoomCreateWithoutVertifyCodeInput, BookRoomUncheckedCreateWithoutVertifyCodeInput>
  }

  export type BookRoomUpdateWithWhereUniqueWithoutVertifyCodeInput = {
    where: BookRoomWhereUniqueInput
    data: XOR<BookRoomUpdateWithoutVertifyCodeInput, BookRoomUncheckedUpdateWithoutVertifyCodeInput>
  }

  export type BookRoomUpdateManyWithWhereWithoutVertifyCodeInput = {
    where: BookRoomScalarWhereInput
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyWithoutBookRoomInput>
  }

  export type CoWorkCreateWithoutOpenInput = {
    name: string
    description: string
    location: string
    tel: string
    picture: string
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkCreateNestedManyWithoutCoWorkInput
    userInternal?: UserInternalCreateNestedOneWithoutCoWorkInput
    Close?: CloseCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUncheckedCreateWithoutOpenInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId?: number | null
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedCreateNestedManyWithoutCoWorkInput
    Close?: CloseUncheckedCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursUncheckedCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkCreateOrConnectWithoutOpenInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutOpenInput, CoWorkUncheckedCreateWithoutOpenInput>
  }

  export type CoWorkUpsertWithoutOpenInput = {
    update: XOR<CoWorkUpdateWithoutOpenInput, CoWorkUncheckedUpdateWithoutOpenInput>
    create: XOR<CoWorkCreateWithoutOpenInput, CoWorkUncheckedCreateWithoutOpenInput>
  }

  export type CoWorkUpdateWithoutOpenInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUpdateManyWithoutCoWorkNestedInput
    userInternal?: UserInternalUpdateOneWithoutCoWorkNestedInput
    Close?: CloseUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutOpenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: NullableIntFieldUpdateOperationsInput | number | null
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedUpdateManyWithoutCoWorkNestedInput
    Close?: CloseUncheckedUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUncheckedUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkCreateWithoutCloseInput = {
    name: string
    description: string
    location: string
    tel: string
    picture: string
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkCreateNestedManyWithoutCoWorkInput
    userInternal?: UserInternalCreateNestedOneWithoutCoWorkInput
    Open?: OpenCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUncheckedCreateWithoutCloseInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId?: number | null
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedCreateNestedManyWithoutCoWorkInput
    Open?: OpenUncheckedCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursUncheckedCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkCreateOrConnectWithoutCloseInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutCloseInput, CoWorkUncheckedCreateWithoutCloseInput>
  }

  export type CoWorkUpsertWithoutCloseInput = {
    update: XOR<CoWorkUpdateWithoutCloseInput, CoWorkUncheckedUpdateWithoutCloseInput>
    create: XOR<CoWorkCreateWithoutCloseInput, CoWorkUncheckedCreateWithoutCloseInput>
  }

  export type CoWorkUpdateWithoutCloseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUpdateManyWithoutCoWorkNestedInput
    userInternal?: UserInternalUpdateOneWithoutCoWorkNestedInput
    Open?: OpenUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutCloseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: NullableIntFieldUpdateOperationsInput | number | null
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedUpdateManyWithoutCoWorkNestedInput
    Open?: OpenUncheckedUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUncheckedUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkCreateWithoutOpenClose24HoursInput = {
    name: string
    description: string
    location: string
    tel: string
    picture: string
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkCreateNestedManyWithoutCoWorkInput
    userInternal?: UserInternalCreateNestedOneWithoutCoWorkInput
    Close?: CloseCreateNestedOneWithoutCoworkInput
    Open?: OpenCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUncheckedCreateWithoutOpenClose24HoursInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId?: number | null
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedCreateNestedManyWithoutCoWorkInput
    Close?: CloseUncheckedCreateNestedOneWithoutCoworkInput
    Open?: OpenUncheckedCreateNestedOneWithoutCoworkInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkCreateOrConnectWithoutOpenClose24HoursInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutOpenClose24HoursInput, CoWorkUncheckedCreateWithoutOpenClose24HoursInput>
  }

  export type CoWorkUpsertWithoutOpenClose24HoursInput = {
    update: XOR<CoWorkUpdateWithoutOpenClose24HoursInput, CoWorkUncheckedUpdateWithoutOpenClose24HoursInput>
    create: XOR<CoWorkCreateWithoutOpenClose24HoursInput, CoWorkUncheckedCreateWithoutOpenClose24HoursInput>
  }

  export type CoWorkUpdateWithoutOpenClose24HoursInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUpdateManyWithoutCoWorkNestedInput
    userInternal?: UserInternalUpdateOneWithoutCoWorkNestedInput
    Close?: CloseUpdateOneWithoutCoworkNestedInput
    Open?: OpenUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutOpenClose24HoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: NullableIntFieldUpdateOperationsInput | number | null
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedUpdateManyWithoutCoWorkNestedInput
    Close?: CloseUncheckedUpdateOneWithoutCoworkNestedInput
    Open?: OpenUncheckedUpdateOneWithoutCoworkNestedInput
    OpenCloseBoolean?: OpenCloseBooleanUncheckedUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkCreateWithoutOpenCloseBooleanInput = {
    name: string
    description: string
    location: string
    tel: string
    picture: string
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkCreateNestedManyWithoutCoWorkInput
    userInternal?: UserInternalCreateNestedOneWithoutCoWorkInput
    Close?: CloseCreateNestedOneWithoutCoworkInput
    Open?: OpenCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkUncheckedCreateWithoutOpenCloseBooleanInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: string
    picture: string
    userInternalId?: number | null
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedCreateNestedManyWithoutCoWorkInput
    Close?: CloseUncheckedCreateNestedOneWithoutCoworkInput
    Open?: OpenUncheckedCreateNestedOneWithoutCoworkInput
    OpenClose24Hours?: OpenClose24HoursUncheckedCreateNestedOneWithoutCoworkInput
  }

  export type CoWorkCreateOrConnectWithoutOpenCloseBooleanInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutOpenCloseBooleanInput, CoWorkUncheckedCreateWithoutOpenCloseBooleanInput>
  }

  export type CoWorkUpsertWithoutOpenCloseBooleanInput = {
    update: XOR<CoWorkUpdateWithoutOpenCloseBooleanInput, CoWorkUncheckedUpdateWithoutOpenCloseBooleanInput>
    create: XOR<CoWorkCreateWithoutOpenCloseBooleanInput, CoWorkUncheckedCreateWithoutOpenCloseBooleanInput>
  }

  export type CoWorkUpdateWithoutOpenCloseBooleanInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUpdateManyWithoutCoWorkNestedInput
    userInternal?: UserInternalUpdateOneWithoutCoWorkNestedInput
    Close?: CloseUpdateOneWithoutCoworkNestedInput
    Open?: OpenUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUpdateOneWithoutCoworkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutOpenCloseBooleanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: NullableIntFieldUpdateOperationsInput | number | null
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    FacilityToCoWork?: FacilityToCoWorkUncheckedUpdateManyWithoutCoWorkNestedInput
    Close?: CloseUncheckedUpdateOneWithoutCoworkNestedInput
    Open?: OpenUncheckedUpdateOneWithoutCoworkNestedInput
    OpenClose24Hours?: OpenClose24HoursUncheckedUpdateOneWithoutCoworkNestedInput
  }

  export type BookRoomCreateManyUserExternalInput = {
    id?: number
    startTime: Date | string
    roomId?: number | null
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    vertifyBookingCodeId: number
    price?: number | null
  }

  export type BookRoomUpdateWithoutUserExternalInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    room?: RoomUpdateOneWithoutBookRoomNestedInput
    roomRate?: RoomRateUpdateOneRequiredWithoutBookRoomNestedInput
    vertifyCode?: VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateWithoutUserExternalInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookRoomUncheckedUpdateManyWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BranchToRoomCreateManyCoWorkInput = {
    id?: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
    active?: boolean | null
  }

  export type FacilityToCoWorkCreateManyCoWorkInput = {
    id?: number
    facilityId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type BranchToRoomUpdateWithoutCoWorkInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    room?: RoomUpdateOneRequiredWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomUncheckedUpdateWithoutCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BranchToRoomUncheckedUpdateManyWithoutBranchToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FacilityToCoWorkUpdateWithoutCoWorkInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneRequiredWithoutFacilityToCoWorkNestedInput
  }

  export type FacilityToCoWorkUncheckedUpdateWithoutCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToCoWorkUncheckedUpdateManyWithoutFacilityToCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomRateCreateManyRoomInput = {
    id?: number
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    durationCategoryId: number
    active?: boolean | null
  }

  export type BookRoomCreateManyRoomInput = {
    id?: number
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
    price?: number | null
  }

  export type RoomRateUpdateWithoutRoomInput = {
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    BookRoom?: BookRoomUpdateManyWithoutRoomRateNestedInput
    duration?: durationCategoryUpdateOneRequiredWithoutRoomRateNestedInput
  }

  export type RoomRateUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationCategoryId?: IntFieldUpdateOperationsInput | number
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    BookRoom?: BookRoomUncheckedUpdateManyWithoutRoomRateNestedInput
  }

  export type RoomRateUncheckedUpdateManyWithoutRoomRateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationCategoryId?: IntFieldUpdateOperationsInput | number
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BookRoomUpdateWithoutRoomInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    roomRate?: RoomRateUpdateOneRequiredWithoutBookRoomNestedInput
    UserExternal?: UserExternalUpdateOneRequiredWithoutBookRoomNestedInput
    vertifyCode?: VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookRoomCreateManyRoomRateInput = {
    id?: number
    startTime: Date | string
    roomId?: number | null
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
    price?: number | null
  }

  export type BookRoomUpdateWithoutRoomRateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    room?: RoomUpdateOneWithoutBookRoomNestedInput
    UserExternal?: UserExternalUpdateOneRequiredWithoutBookRoomNestedInput
    vertifyCode?: VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateWithoutRoomRateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoomRateCreateManyDurationInput = {
    id?: number
    price?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    roomId?: number | null
    active?: boolean | null
  }

  export type RoomRateUpdateWithoutDurationInput = {
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    BookRoom?: BookRoomUpdateManyWithoutRoomRateNestedInput
    room?: RoomUpdateOneWithoutRoomRateNestedInput
  }

  export type RoomRateUncheckedUpdateWithoutDurationInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    BookRoom?: BookRoomUncheckedUpdateManyWithoutRoomRateNestedInput
  }

  export type FacilityToCoWorkCreateManyFacilityInput = {
    id?: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToCoWorkUpdateWithoutFacilityInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUpdateOneRequiredWithoutFacilityToCoWorkNestedInput
  }

  export type FacilityToCoWorkUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRoomCreateManyVertifyCodeInput = {
    id?: number
    startTime: Date | string
    roomId?: number | null
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    price?: number | null
  }

  export type BookRoomUpdateWithoutVertifyCodeInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    room?: RoomUpdateOneWithoutBookRoomNestedInput
    roomRate?: RoomRateUpdateOneRequiredWithoutBookRoomNestedInput
    UserExternal?: UserExternalUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateWithoutVertifyCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}