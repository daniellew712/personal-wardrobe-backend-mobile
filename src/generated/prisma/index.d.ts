
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ClothingItem
 * 
 */
export type ClothingItem = $Result.DefaultSelection<Prisma.$ClothingItemPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Outfit
 * 
 */
export type Outfit = $Result.DefaultSelection<Prisma.$OutfitPayload>
/**
 * Model OutfitItem
 * 
 */
export type OutfitItem = $Result.DefaultSelection<Prisma.$OutfitItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clothingItem`: Exposes CRUD operations for the **ClothingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClothingItems
    * const clothingItems = await prisma.clothingItem.findMany()
    * ```
    */
  get clothingItem(): Prisma.ClothingItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfit`: Exposes CRUD operations for the **Outfit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outfits
    * const outfits = await prisma.outfit.findMany()
    * ```
    */
  get outfit(): Prisma.OutfitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfitItem`: Exposes CRUD operations for the **OutfitItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutfitItems
    * const outfitItems = await prisma.outfitItem.findMany()
    * ```
    */
  get outfitItem(): Prisma.OutfitItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    ClothingItem: 'ClothingItem',
    Tag: 'Tag',
    Outfit: 'Outfit',
    OutfitItem: 'OutfitItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "clothingItem" | "tag" | "outfit" | "outfitItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ClothingItem: {
        payload: Prisma.$ClothingItemPayload<ExtArgs>
        fields: Prisma.ClothingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClothingItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClothingItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>
          }
          findFirst: {
            args: Prisma.ClothingItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClothingItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>
          }
          findMany: {
            args: Prisma.ClothingItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>[]
          }
          create: {
            args: Prisma.ClothingItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>
          }
          createMany: {
            args: Prisma.ClothingItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClothingItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>[]
          }
          delete: {
            args: Prisma.ClothingItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>
          }
          update: {
            args: Prisma.ClothingItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>
          }
          deleteMany: {
            args: Prisma.ClothingItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClothingItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClothingItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>[]
          }
          upsert: {
            args: Prisma.ClothingItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingItemPayload>
          }
          aggregate: {
            args: Prisma.ClothingItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClothingItem>
          }
          groupBy: {
            args: Prisma.ClothingItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClothingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClothingItemCountArgs<ExtArgs>
            result: $Utils.Optional<ClothingItemCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Outfit: {
        payload: Prisma.$OutfitPayload<ExtArgs>
        fields: Prisma.OutfitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          findFirst: {
            args: Prisma.OutfitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          findMany: {
            args: Prisma.OutfitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          create: {
            args: Prisma.OutfitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          createMany: {
            args: Prisma.OutfitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          delete: {
            args: Prisma.OutfitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          update: {
            args: Prisma.OutfitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          deleteMany: {
            args: Prisma.OutfitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          upsert: {
            args: Prisma.OutfitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          aggregate: {
            args: Prisma.OutfitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfit>
          }
          groupBy: {
            args: Prisma.OutfitGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitCountAggregateOutputType> | number
          }
        }
      }
      OutfitItem: {
        payload: Prisma.$OutfitItemPayload<ExtArgs>
        fields: Prisma.OutfitItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>
          }
          findFirst: {
            args: Prisma.OutfitItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>
          }
          findMany: {
            args: Prisma.OutfitItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>[]
          }
          create: {
            args: Prisma.OutfitItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>
          }
          createMany: {
            args: Prisma.OutfitItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>[]
          }
          delete: {
            args: Prisma.OutfitItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>
          }
          update: {
            args: Prisma.OutfitItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>
          }
          deleteMany: {
            args: Prisma.OutfitItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>[]
          }
          upsert: {
            args: Prisma.OutfitItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitItemPayload>
          }
          aggregate: {
            args: Prisma.OutfitItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfitItem>
          }
          groupBy: {
            args: Prisma.OutfitItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitItemCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    clothingItem?: ClothingItemOmit
    tag?: TagOmit
    outfit?: OutfitOmit
    outfitItem?: OutfitItemOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clothingItems: number
    outfits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothingItems?: boolean | UserCountOutputTypeCountClothingItemsArgs
    outfits?: boolean | UserCountOutputTypeCountOutfitsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClothingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothingItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOutfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    clothingItems: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothingItems?: boolean | CategoryCountOutputTypeCountClothingItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountClothingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothingItemWhereInput
  }


  /**
   * Count Type ClothingItemCountOutputType
   */

  export type ClothingItemCountOutputType = {
    tags: number
    outfitItems: number
  }

  export type ClothingItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ClothingItemCountOutputTypeCountTagsArgs
    outfitItems?: boolean | ClothingItemCountOutputTypeCountOutfitItemsArgs
  }

  // Custom InputTypes
  /**
   * ClothingItemCountOutputType without action
   */
  export type ClothingItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItemCountOutputType
     */
    select?: ClothingItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClothingItemCountOutputType without action
   */
  export type ClothingItemCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * ClothingItemCountOutputType without action
   */
  export type ClothingItemCountOutputTypeCountOutfitItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitItemWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    clothingItems: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothingItems?: boolean | TagCountOutputTypeCountClothingItemsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountClothingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothingItemWhereInput
  }


  /**
   * Count Type OutfitCountOutputType
   */

  export type OutfitCountOutputType = {
    outfitItems: number
  }

  export type OutfitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfitItems?: boolean | OutfitCountOutputTypeCountOutfitItemsArgs
  }

  // Custom InputTypes
  /**
   * OutfitCountOutputType without action
   */
  export type OutfitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCountOutputType
     */
    select?: OutfitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutfitCountOutputType without action
   */
  export type OutfitCountOutputTypeCountOutfitItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    photoURL: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    photoURL: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    photoURL: number
    provider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    photoURL?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    photoURL?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    photoURL?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    photoURL: string | null
    provider: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    photoURL?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clothingItems?: boolean | User$clothingItemsArgs<ExtArgs>
    outfits?: boolean | User$outfitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    photoURL?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    photoURL?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    photoURL?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "photoURL" | "provider" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothingItems?: boolean | User$clothingItemsArgs<ExtArgs>
    outfits?: boolean | User$outfitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clothingItems: Prisma.$ClothingItemPayload<ExtArgs>[]
      outfits: Prisma.$OutfitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      photoURL: string | null
      provider: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clothingItems<T extends User$clothingItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$clothingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outfits<T extends User$outfitsArgs<ExtArgs> = {}>(args?: Subset<T, User$outfitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly photoURL: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clothingItems
   */
  export type User$clothingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    where?: ClothingItemWhereInput
    orderBy?: ClothingItemOrderByWithRelationInput | ClothingItemOrderByWithRelationInput[]
    cursor?: ClothingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClothingItemScalarFieldEnum | ClothingItemScalarFieldEnum[]
  }

  /**
   * User.outfits
   */
  export type User$outfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    where?: OutfitWhereInput
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    cursor?: OutfitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clothingItems?: boolean | Category$clothingItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothingItems?: boolean | Category$clothingItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      clothingItems: Prisma.$ClothingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clothingItems<T extends Category$clothingItemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$clothingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.clothingItems
   */
  export type Category$clothingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    where?: ClothingItemWhereInput
    orderBy?: ClothingItemOrderByWithRelationInput | ClothingItemOrderByWithRelationInput[]
    cursor?: ClothingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClothingItemScalarFieldEnum | ClothingItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ClothingItem
   */

  export type AggregateClothingItem = {
    _count: ClothingItemCountAggregateOutputType | null
    _avg: ClothingItemAvgAggregateOutputType | null
    _sum: ClothingItemSumAggregateOutputType | null
    _min: ClothingItemMinAggregateOutputType | null
    _max: ClothingItemMaxAggregateOutputType | null
  }

  export type ClothingItemAvgAggregateOutputType = {
    price: number | null
  }

  export type ClothingItemSumAggregateOutputType = {
    price: number | null
  }

  export type ClothingItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    brand: string | null
    color: string | null
    size: string | null
    price: number | null
    purchaseDate: Date | null
    imageUrl: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type ClothingItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    brand: string | null
    color: string | null
    size: string | null
    price: number | null
    purchaseDate: Date | null
    imageUrl: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type ClothingItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    brand: number
    color: number
    size: number
    price: number
    purchaseDate: number
    imageUrl: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    _all: number
  }


  export type ClothingItemAvgAggregateInputType = {
    price?: true
  }

  export type ClothingItemSumAggregateInputType = {
    price?: true
  }

  export type ClothingItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brand?: true
    color?: true
    size?: true
    price?: true
    purchaseDate?: true
    imageUrl?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type ClothingItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brand?: true
    color?: true
    size?: true
    price?: true
    purchaseDate?: true
    imageUrl?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type ClothingItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brand?: true
    color?: true
    size?: true
    price?: true
    purchaseDate?: true
    imageUrl?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type ClothingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClothingItem to aggregate.
     */
    where?: ClothingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClothingItems to fetch.
     */
    orderBy?: ClothingItemOrderByWithRelationInput | ClothingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClothingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClothingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClothingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClothingItems
    **/
    _count?: true | ClothingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClothingItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClothingItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClothingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClothingItemMaxAggregateInputType
  }

  export type GetClothingItemAggregateType<T extends ClothingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateClothingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClothingItem[P]>
      : GetScalarType<T[P], AggregateClothingItem[P]>
  }




  export type ClothingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothingItemWhereInput
    orderBy?: ClothingItemOrderByWithAggregationInput | ClothingItemOrderByWithAggregationInput[]
    by: ClothingItemScalarFieldEnum[] | ClothingItemScalarFieldEnum
    having?: ClothingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClothingItemCountAggregateInputType | true
    _avg?: ClothingItemAvgAggregateInputType
    _sum?: ClothingItemSumAggregateInputType
    _min?: ClothingItemMinAggregateInputType
    _max?: ClothingItemMaxAggregateInputType
  }

  export type ClothingItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    brand: string | null
    color: string | null
    size: string | null
    price: number | null
    purchaseDate: Date | null
    imageUrl: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string
    _count: ClothingItemCountAggregateOutputType | null
    _avg: ClothingItemAvgAggregateOutputType | null
    _sum: ClothingItemSumAggregateOutputType | null
    _min: ClothingItemMinAggregateOutputType | null
    _max: ClothingItemMaxAggregateOutputType | null
  }

  type GetClothingItemGroupByPayload<T extends ClothingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClothingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClothingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClothingItemGroupByOutputType[P]>
            : GetScalarType<T[P], ClothingItemGroupByOutputType[P]>
        }
      >
    >


  export type ClothingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    color?: boolean
    size?: boolean
    price?: boolean
    purchaseDate?: boolean
    imageUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tags?: boolean | ClothingItem$tagsArgs<ExtArgs>
    outfitItems?: boolean | ClothingItem$outfitItemsArgs<ExtArgs>
    _count?: boolean | ClothingItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clothingItem"]>

  export type ClothingItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    color?: boolean
    size?: boolean
    price?: boolean
    purchaseDate?: boolean
    imageUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clothingItem"]>

  export type ClothingItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    color?: boolean
    size?: boolean
    price?: boolean
    purchaseDate?: boolean
    imageUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clothingItem"]>

  export type ClothingItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    color?: boolean
    size?: boolean
    price?: boolean
    purchaseDate?: boolean
    imageUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type ClothingItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "brand" | "color" | "size" | "price" | "purchaseDate" | "imageUrl" | "notes" | "createdAt" | "updatedAt" | "userId" | "categoryId", ExtArgs["result"]["clothingItem"]>
  export type ClothingItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tags?: boolean | ClothingItem$tagsArgs<ExtArgs>
    outfitItems?: boolean | ClothingItem$outfitItemsArgs<ExtArgs>
    _count?: boolean | ClothingItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClothingItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ClothingItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ClothingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClothingItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      outfitItems: Prisma.$OutfitItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      brand: string | null
      color: string | null
      size: string | null
      price: number | null
      purchaseDate: Date | null
      imageUrl: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string
    }, ExtArgs["result"]["clothingItem"]>
    composites: {}
  }

  type ClothingItemGetPayload<S extends boolean | null | undefined | ClothingItemDefaultArgs> = $Result.GetResult<Prisma.$ClothingItemPayload, S>

  type ClothingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClothingItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClothingItemCountAggregateInputType | true
    }

  export interface ClothingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClothingItem'], meta: { name: 'ClothingItem' } }
    /**
     * Find zero or one ClothingItem that matches the filter.
     * @param {ClothingItemFindUniqueArgs} args - Arguments to find a ClothingItem
     * @example
     * // Get one ClothingItem
     * const clothingItem = await prisma.clothingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClothingItemFindUniqueArgs>(args: SelectSubset<T, ClothingItemFindUniqueArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClothingItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClothingItemFindUniqueOrThrowArgs} args - Arguments to find a ClothingItem
     * @example
     * // Get one ClothingItem
     * const clothingItem = await prisma.clothingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClothingItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ClothingItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClothingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingItemFindFirstArgs} args - Arguments to find a ClothingItem
     * @example
     * // Get one ClothingItem
     * const clothingItem = await prisma.clothingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClothingItemFindFirstArgs>(args?: SelectSubset<T, ClothingItemFindFirstArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClothingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingItemFindFirstOrThrowArgs} args - Arguments to find a ClothingItem
     * @example
     * // Get one ClothingItem
     * const clothingItem = await prisma.clothingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClothingItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ClothingItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClothingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClothingItems
     * const clothingItems = await prisma.clothingItem.findMany()
     * 
     * // Get first 10 ClothingItems
     * const clothingItems = await prisma.clothingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clothingItemWithIdOnly = await prisma.clothingItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClothingItemFindManyArgs>(args?: SelectSubset<T, ClothingItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClothingItem.
     * @param {ClothingItemCreateArgs} args - Arguments to create a ClothingItem.
     * @example
     * // Create one ClothingItem
     * const ClothingItem = await prisma.clothingItem.create({
     *   data: {
     *     // ... data to create a ClothingItem
     *   }
     * })
     * 
     */
    create<T extends ClothingItemCreateArgs>(args: SelectSubset<T, ClothingItemCreateArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClothingItems.
     * @param {ClothingItemCreateManyArgs} args - Arguments to create many ClothingItems.
     * @example
     * // Create many ClothingItems
     * const clothingItem = await prisma.clothingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClothingItemCreateManyArgs>(args?: SelectSubset<T, ClothingItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClothingItems and returns the data saved in the database.
     * @param {ClothingItemCreateManyAndReturnArgs} args - Arguments to create many ClothingItems.
     * @example
     * // Create many ClothingItems
     * const clothingItem = await prisma.clothingItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClothingItems and only return the `id`
     * const clothingItemWithIdOnly = await prisma.clothingItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClothingItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ClothingItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClothingItem.
     * @param {ClothingItemDeleteArgs} args - Arguments to delete one ClothingItem.
     * @example
     * // Delete one ClothingItem
     * const ClothingItem = await prisma.clothingItem.delete({
     *   where: {
     *     // ... filter to delete one ClothingItem
     *   }
     * })
     * 
     */
    delete<T extends ClothingItemDeleteArgs>(args: SelectSubset<T, ClothingItemDeleteArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClothingItem.
     * @param {ClothingItemUpdateArgs} args - Arguments to update one ClothingItem.
     * @example
     * // Update one ClothingItem
     * const clothingItem = await prisma.clothingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClothingItemUpdateArgs>(args: SelectSubset<T, ClothingItemUpdateArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClothingItems.
     * @param {ClothingItemDeleteManyArgs} args - Arguments to filter ClothingItems to delete.
     * @example
     * // Delete a few ClothingItems
     * const { count } = await prisma.clothingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClothingItemDeleteManyArgs>(args?: SelectSubset<T, ClothingItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClothingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClothingItems
     * const clothingItem = await prisma.clothingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClothingItemUpdateManyArgs>(args: SelectSubset<T, ClothingItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClothingItems and returns the data updated in the database.
     * @param {ClothingItemUpdateManyAndReturnArgs} args - Arguments to update many ClothingItems.
     * @example
     * // Update many ClothingItems
     * const clothingItem = await prisma.clothingItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClothingItems and only return the `id`
     * const clothingItemWithIdOnly = await prisma.clothingItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClothingItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ClothingItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClothingItem.
     * @param {ClothingItemUpsertArgs} args - Arguments to update or create a ClothingItem.
     * @example
     * // Update or create a ClothingItem
     * const clothingItem = await prisma.clothingItem.upsert({
     *   create: {
     *     // ... data to create a ClothingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClothingItem we want to update
     *   }
     * })
     */
    upsert<T extends ClothingItemUpsertArgs>(args: SelectSubset<T, ClothingItemUpsertArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClothingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingItemCountArgs} args - Arguments to filter ClothingItems to count.
     * @example
     * // Count the number of ClothingItems
     * const count = await prisma.clothingItem.count({
     *   where: {
     *     // ... the filter for the ClothingItems we want to count
     *   }
     * })
    **/
    count<T extends ClothingItemCountArgs>(
      args?: Subset<T, ClothingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClothingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClothingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClothingItemAggregateArgs>(args: Subset<T, ClothingItemAggregateArgs>): Prisma.PrismaPromise<GetClothingItemAggregateType<T>>

    /**
     * Group by ClothingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingItemGroupByArgs} args - Group by arguments.
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
      T extends ClothingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClothingItemGroupByArgs['orderBy'] }
        : { orderBy?: ClothingItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClothingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClothingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClothingItem model
   */
  readonly fields: ClothingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClothingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClothingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends ClothingItem$tagsArgs<ExtArgs> = {}>(args?: Subset<T, ClothingItem$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outfitItems<T extends ClothingItem$outfitItemsArgs<ExtArgs> = {}>(args?: Subset<T, ClothingItem$outfitItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClothingItem model
   */
  interface ClothingItemFieldRefs {
    readonly id: FieldRef<"ClothingItem", 'String'>
    readonly name: FieldRef<"ClothingItem", 'String'>
    readonly description: FieldRef<"ClothingItem", 'String'>
    readonly brand: FieldRef<"ClothingItem", 'String'>
    readonly color: FieldRef<"ClothingItem", 'String'>
    readonly size: FieldRef<"ClothingItem", 'String'>
    readonly price: FieldRef<"ClothingItem", 'Float'>
    readonly purchaseDate: FieldRef<"ClothingItem", 'DateTime'>
    readonly imageUrl: FieldRef<"ClothingItem", 'String'>
    readonly notes: FieldRef<"ClothingItem", 'String'>
    readonly createdAt: FieldRef<"ClothingItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ClothingItem", 'DateTime'>
    readonly userId: FieldRef<"ClothingItem", 'String'>
    readonly categoryId: FieldRef<"ClothingItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClothingItem findUnique
   */
  export type ClothingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * Filter, which ClothingItem to fetch.
     */
    where: ClothingItemWhereUniqueInput
  }

  /**
   * ClothingItem findUniqueOrThrow
   */
  export type ClothingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * Filter, which ClothingItem to fetch.
     */
    where: ClothingItemWhereUniqueInput
  }

  /**
   * ClothingItem findFirst
   */
  export type ClothingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * Filter, which ClothingItem to fetch.
     */
    where?: ClothingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClothingItems to fetch.
     */
    orderBy?: ClothingItemOrderByWithRelationInput | ClothingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClothingItems.
     */
    cursor?: ClothingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClothingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClothingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClothingItems.
     */
    distinct?: ClothingItemScalarFieldEnum | ClothingItemScalarFieldEnum[]
  }

  /**
   * ClothingItem findFirstOrThrow
   */
  export type ClothingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * Filter, which ClothingItem to fetch.
     */
    where?: ClothingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClothingItems to fetch.
     */
    orderBy?: ClothingItemOrderByWithRelationInput | ClothingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClothingItems.
     */
    cursor?: ClothingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClothingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClothingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClothingItems.
     */
    distinct?: ClothingItemScalarFieldEnum | ClothingItemScalarFieldEnum[]
  }

  /**
   * ClothingItem findMany
   */
  export type ClothingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * Filter, which ClothingItems to fetch.
     */
    where?: ClothingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClothingItems to fetch.
     */
    orderBy?: ClothingItemOrderByWithRelationInput | ClothingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClothingItems.
     */
    cursor?: ClothingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClothingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClothingItems.
     */
    skip?: number
    distinct?: ClothingItemScalarFieldEnum | ClothingItemScalarFieldEnum[]
  }

  /**
   * ClothingItem create
   */
  export type ClothingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ClothingItem.
     */
    data: XOR<ClothingItemCreateInput, ClothingItemUncheckedCreateInput>
  }

  /**
   * ClothingItem createMany
   */
  export type ClothingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClothingItems.
     */
    data: ClothingItemCreateManyInput | ClothingItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClothingItem createManyAndReturn
   */
  export type ClothingItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * The data used to create many ClothingItems.
     */
    data: ClothingItemCreateManyInput | ClothingItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClothingItem update
   */
  export type ClothingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ClothingItem.
     */
    data: XOR<ClothingItemUpdateInput, ClothingItemUncheckedUpdateInput>
    /**
     * Choose, which ClothingItem to update.
     */
    where: ClothingItemWhereUniqueInput
  }

  /**
   * ClothingItem updateMany
   */
  export type ClothingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClothingItems.
     */
    data: XOR<ClothingItemUpdateManyMutationInput, ClothingItemUncheckedUpdateManyInput>
    /**
     * Filter which ClothingItems to update
     */
    where?: ClothingItemWhereInput
    /**
     * Limit how many ClothingItems to update.
     */
    limit?: number
  }

  /**
   * ClothingItem updateManyAndReturn
   */
  export type ClothingItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * The data used to update ClothingItems.
     */
    data: XOR<ClothingItemUpdateManyMutationInput, ClothingItemUncheckedUpdateManyInput>
    /**
     * Filter which ClothingItems to update
     */
    where?: ClothingItemWhereInput
    /**
     * Limit how many ClothingItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClothingItem upsert
   */
  export type ClothingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ClothingItem to update in case it exists.
     */
    where: ClothingItemWhereUniqueInput
    /**
     * In case the ClothingItem found by the `where` argument doesn't exist, create a new ClothingItem with this data.
     */
    create: XOR<ClothingItemCreateInput, ClothingItemUncheckedCreateInput>
    /**
     * In case the ClothingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClothingItemUpdateInput, ClothingItemUncheckedUpdateInput>
  }

  /**
   * ClothingItem delete
   */
  export type ClothingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    /**
     * Filter which ClothingItem to delete.
     */
    where: ClothingItemWhereUniqueInput
  }

  /**
   * ClothingItem deleteMany
   */
  export type ClothingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClothingItems to delete
     */
    where?: ClothingItemWhereInput
    /**
     * Limit how many ClothingItems to delete.
     */
    limit?: number
  }

  /**
   * ClothingItem.tags
   */
  export type ClothingItem$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * ClothingItem.outfitItems
   */
  export type ClothingItem$outfitItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    where?: OutfitItemWhereInput
    orderBy?: OutfitItemOrderByWithRelationInput | OutfitItemOrderByWithRelationInput[]
    cursor?: OutfitItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitItemScalarFieldEnum | OutfitItemScalarFieldEnum[]
  }

  /**
   * ClothingItem without action
   */
  export type ClothingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clothingItems?: boolean | Tag$clothingItemsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothingItems?: boolean | Tag$clothingItemsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      clothingItems: Prisma.$ClothingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clothingItems<T extends Tag$clothingItemsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$clothingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.clothingItems
   */
  export type Tag$clothingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingItem
     */
    select?: ClothingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClothingItem
     */
    omit?: ClothingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingItemInclude<ExtArgs> | null
    where?: ClothingItemWhereInput
    orderBy?: ClothingItemOrderByWithRelationInput | ClothingItemOrderByWithRelationInput[]
    cursor?: ClothingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClothingItemScalarFieldEnum | ClothingItemScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Outfit
   */

  export type AggregateOutfit = {
    _count: OutfitCountAggregateOutputType | null
    _min: OutfitMinAggregateOutputType | null
    _max: OutfitMaxAggregateOutputType | null
  }

  export type OutfitMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    occasion: string | null
    season: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type OutfitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    occasion: string | null
    season: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type OutfitCountAggregateOutputType = {
    id: number
    name: number
    description: number
    occasion: number
    season: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type OutfitMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    occasion?: true
    season?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OutfitMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    occasion?: true
    season?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OutfitCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    occasion?: true
    season?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type OutfitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outfit to aggregate.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outfits
    **/
    _count?: true | OutfitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitMaxAggregateInputType
  }

  export type GetOutfitAggregateType<T extends OutfitAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfit[P]>
      : GetScalarType<T[P], AggregateOutfit[P]>
  }




  export type OutfitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitWhereInput
    orderBy?: OutfitOrderByWithAggregationInput | OutfitOrderByWithAggregationInput[]
    by: OutfitScalarFieldEnum[] | OutfitScalarFieldEnum
    having?: OutfitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitCountAggregateInputType | true
    _min?: OutfitMinAggregateInputType
    _max?: OutfitMaxAggregateInputType
  }

  export type OutfitGroupByOutputType = {
    id: string
    name: string
    description: string | null
    occasion: string | null
    season: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: OutfitCountAggregateOutputType | null
    _min: OutfitMinAggregateOutputType | null
    _max: OutfitMaxAggregateOutputType | null
  }

  type GetOutfitGroupByPayload<T extends OutfitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitGroupByOutputType[P]>
        }
      >
    >


  export type OutfitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    occasion?: boolean
    season?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfitItems?: boolean | Outfit$outfitItemsArgs<ExtArgs>
    _count?: boolean | OutfitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    occasion?: boolean
    season?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    occasion?: boolean
    season?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    occasion?: boolean
    season?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type OutfitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "occasion" | "season" | "imageUrl" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["outfit"]>
  export type OutfitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfitItems?: boolean | Outfit$outfitItemsArgs<ExtArgs>
    _count?: boolean | OutfitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutfitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutfitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OutfitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outfit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      outfitItems: Prisma.$OutfitItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      occasion: string | null
      season: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["outfit"]>
    composites: {}
  }

  type OutfitGetPayload<S extends boolean | null | undefined | OutfitDefaultArgs> = $Result.GetResult<Prisma.$OutfitPayload, S>

  type OutfitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitCountAggregateInputType | true
    }

  export interface OutfitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outfit'], meta: { name: 'Outfit' } }
    /**
     * Find zero or one Outfit that matches the filter.
     * @param {OutfitFindUniqueArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitFindUniqueArgs>(args: SelectSubset<T, OutfitFindUniqueArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outfit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitFindUniqueOrThrowArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outfit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindFirstArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitFindFirstArgs>(args?: SelectSubset<T, OutfitFindFirstArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outfit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindFirstOrThrowArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outfits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outfits
     * const outfits = await prisma.outfit.findMany()
     * 
     * // Get first 10 Outfits
     * const outfits = await prisma.outfit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitWithIdOnly = await prisma.outfit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitFindManyArgs>(args?: SelectSubset<T, OutfitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outfit.
     * @param {OutfitCreateArgs} args - Arguments to create a Outfit.
     * @example
     * // Create one Outfit
     * const Outfit = await prisma.outfit.create({
     *   data: {
     *     // ... data to create a Outfit
     *   }
     * })
     * 
     */
    create<T extends OutfitCreateArgs>(args: SelectSubset<T, OutfitCreateArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outfits.
     * @param {OutfitCreateManyArgs} args - Arguments to create many Outfits.
     * @example
     * // Create many Outfits
     * const outfit = await prisma.outfit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitCreateManyArgs>(args?: SelectSubset<T, OutfitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outfits and returns the data saved in the database.
     * @param {OutfitCreateManyAndReturnArgs} args - Arguments to create many Outfits.
     * @example
     * // Create many Outfits
     * const outfit = await prisma.outfit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outfits and only return the `id`
     * const outfitWithIdOnly = await prisma.outfit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Outfit.
     * @param {OutfitDeleteArgs} args - Arguments to delete one Outfit.
     * @example
     * // Delete one Outfit
     * const Outfit = await prisma.outfit.delete({
     *   where: {
     *     // ... filter to delete one Outfit
     *   }
     * })
     * 
     */
    delete<T extends OutfitDeleteArgs>(args: SelectSubset<T, OutfitDeleteArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outfit.
     * @param {OutfitUpdateArgs} args - Arguments to update one Outfit.
     * @example
     * // Update one Outfit
     * const outfit = await prisma.outfit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitUpdateArgs>(args: SelectSubset<T, OutfitUpdateArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outfits.
     * @param {OutfitDeleteManyArgs} args - Arguments to filter Outfits to delete.
     * @example
     * // Delete a few Outfits
     * const { count } = await prisma.outfit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitDeleteManyArgs>(args?: SelectSubset<T, OutfitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outfits
     * const outfit = await prisma.outfit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitUpdateManyArgs>(args: SelectSubset<T, OutfitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outfits and returns the data updated in the database.
     * @param {OutfitUpdateManyAndReturnArgs} args - Arguments to update many Outfits.
     * @example
     * // Update many Outfits
     * const outfit = await prisma.outfit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outfits and only return the `id`
     * const outfitWithIdOnly = await prisma.outfit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutfitUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Outfit.
     * @param {OutfitUpsertArgs} args - Arguments to update or create a Outfit.
     * @example
     * // Update or create a Outfit
     * const outfit = await prisma.outfit.upsert({
     *   create: {
     *     // ... data to create a Outfit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outfit we want to update
     *   }
     * })
     */
    upsert<T extends OutfitUpsertArgs>(args: SelectSubset<T, OutfitUpsertArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCountArgs} args - Arguments to filter Outfits to count.
     * @example
     * // Count the number of Outfits
     * const count = await prisma.outfit.count({
     *   where: {
     *     // ... the filter for the Outfits we want to count
     *   }
     * })
    **/
    count<T extends OutfitCountArgs>(
      args?: Subset<T, OutfitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutfitAggregateArgs>(args: Subset<T, OutfitAggregateArgs>): Prisma.PrismaPromise<GetOutfitAggregateType<T>>

    /**
     * Group by Outfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitGroupByArgs} args - Group by arguments.
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
      T extends OutfitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitGroupByArgs['orderBy'] }
        : { orderBy?: OutfitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OutfitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outfit model
   */
  readonly fields: OutfitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outfit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outfitItems<T extends Outfit$outfitItemsArgs<ExtArgs> = {}>(args?: Subset<T, Outfit$outfitItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outfit model
   */
  interface OutfitFieldRefs {
    readonly id: FieldRef<"Outfit", 'String'>
    readonly name: FieldRef<"Outfit", 'String'>
    readonly description: FieldRef<"Outfit", 'String'>
    readonly occasion: FieldRef<"Outfit", 'String'>
    readonly season: FieldRef<"Outfit", 'String'>
    readonly imageUrl: FieldRef<"Outfit", 'String'>
    readonly createdAt: FieldRef<"Outfit", 'DateTime'>
    readonly updatedAt: FieldRef<"Outfit", 'DateTime'>
    readonly userId: FieldRef<"Outfit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Outfit findUnique
   */
  export type OutfitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit findUniqueOrThrow
   */
  export type OutfitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit findFirst
   */
  export type OutfitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outfits.
     */
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit findFirstOrThrow
   */
  export type OutfitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outfits.
     */
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit findMany
   */
  export type OutfitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfits to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit create
   */
  export type OutfitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The data needed to create a Outfit.
     */
    data: XOR<OutfitCreateInput, OutfitUncheckedCreateInput>
  }

  /**
   * Outfit createMany
   */
  export type OutfitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outfits.
     */
    data: OutfitCreateManyInput | OutfitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outfit createManyAndReturn
   */
  export type OutfitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * The data used to create many Outfits.
     */
    data: OutfitCreateManyInput | OutfitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outfit update
   */
  export type OutfitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The data needed to update a Outfit.
     */
    data: XOR<OutfitUpdateInput, OutfitUncheckedUpdateInput>
    /**
     * Choose, which Outfit to update.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit updateMany
   */
  export type OutfitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outfits.
     */
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyInput>
    /**
     * Filter which Outfits to update
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to update.
     */
    limit?: number
  }

  /**
   * Outfit updateManyAndReturn
   */
  export type OutfitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * The data used to update Outfits.
     */
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyInput>
    /**
     * Filter which Outfits to update
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outfit upsert
   */
  export type OutfitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The filter to search for the Outfit to update in case it exists.
     */
    where: OutfitWhereUniqueInput
    /**
     * In case the Outfit found by the `where` argument doesn't exist, create a new Outfit with this data.
     */
    create: XOR<OutfitCreateInput, OutfitUncheckedCreateInput>
    /**
     * In case the Outfit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitUpdateInput, OutfitUncheckedUpdateInput>
  }

  /**
   * Outfit delete
   */
  export type OutfitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter which Outfit to delete.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit deleteMany
   */
  export type OutfitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outfits to delete
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to delete.
     */
    limit?: number
  }

  /**
   * Outfit.outfitItems
   */
  export type Outfit$outfitItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    where?: OutfitItemWhereInput
    orderBy?: OutfitItemOrderByWithRelationInput | OutfitItemOrderByWithRelationInput[]
    cursor?: OutfitItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitItemScalarFieldEnum | OutfitItemScalarFieldEnum[]
  }

  /**
   * Outfit without action
   */
  export type OutfitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
  }


  /**
   * Model OutfitItem
   */

  export type AggregateOutfitItem = {
    _count: OutfitItemCountAggregateOutputType | null
    _min: OutfitItemMinAggregateOutputType | null
    _max: OutfitItemMaxAggregateOutputType | null
  }

  export type OutfitItemMinAggregateOutputType = {
    id: string | null
    outfitId: string | null
    clothingItemId: string | null
  }

  export type OutfitItemMaxAggregateOutputType = {
    id: string | null
    outfitId: string | null
    clothingItemId: string | null
  }

  export type OutfitItemCountAggregateOutputType = {
    id: number
    outfitId: number
    clothingItemId: number
    _all: number
  }


  export type OutfitItemMinAggregateInputType = {
    id?: true
    outfitId?: true
    clothingItemId?: true
  }

  export type OutfitItemMaxAggregateInputType = {
    id?: true
    outfitId?: true
    clothingItemId?: true
  }

  export type OutfitItemCountAggregateInputType = {
    id?: true
    outfitId?: true
    clothingItemId?: true
    _all?: true
  }

  export type OutfitItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitItem to aggregate.
     */
    where?: OutfitItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitItems to fetch.
     */
    orderBy?: OutfitItemOrderByWithRelationInput | OutfitItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutfitItems
    **/
    _count?: true | OutfitItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitItemMaxAggregateInputType
  }

  export type GetOutfitItemAggregateType<T extends OutfitItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfitItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfitItem[P]>
      : GetScalarType<T[P], AggregateOutfitItem[P]>
  }




  export type OutfitItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitItemWhereInput
    orderBy?: OutfitItemOrderByWithAggregationInput | OutfitItemOrderByWithAggregationInput[]
    by: OutfitItemScalarFieldEnum[] | OutfitItemScalarFieldEnum
    having?: OutfitItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitItemCountAggregateInputType | true
    _min?: OutfitItemMinAggregateInputType
    _max?: OutfitItemMaxAggregateInputType
  }

  export type OutfitItemGroupByOutputType = {
    id: string
    outfitId: string
    clothingItemId: string
    _count: OutfitItemCountAggregateOutputType | null
    _min: OutfitItemMinAggregateOutputType | null
    _max: OutfitItemMaxAggregateOutputType | null
  }

  type GetOutfitItemGroupByPayload<T extends OutfitItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitItemGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitItemGroupByOutputType[P]>
        }
      >
    >


  export type OutfitItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfitId?: boolean
    clothingItemId?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    clothingItem?: boolean | ClothingItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitItem"]>

  export type OutfitItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfitId?: boolean
    clothingItemId?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    clothingItem?: boolean | ClothingItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitItem"]>

  export type OutfitItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfitId?: boolean
    clothingItemId?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    clothingItem?: boolean | ClothingItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitItem"]>

  export type OutfitItemSelectScalar = {
    id?: boolean
    outfitId?: boolean
    clothingItemId?: boolean
  }

  export type OutfitItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "outfitId" | "clothingItemId", ExtArgs["result"]["outfitItem"]>
  export type OutfitItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    clothingItem?: boolean | ClothingItemDefaultArgs<ExtArgs>
  }
  export type OutfitItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    clothingItem?: boolean | ClothingItemDefaultArgs<ExtArgs>
  }
  export type OutfitItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    clothingItem?: boolean | ClothingItemDefaultArgs<ExtArgs>
  }

  export type $OutfitItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutfitItem"
    objects: {
      outfit: Prisma.$OutfitPayload<ExtArgs>
      clothingItem: Prisma.$ClothingItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outfitId: string
      clothingItemId: string
    }, ExtArgs["result"]["outfitItem"]>
    composites: {}
  }

  type OutfitItemGetPayload<S extends boolean | null | undefined | OutfitItemDefaultArgs> = $Result.GetResult<Prisma.$OutfitItemPayload, S>

  type OutfitItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitItemCountAggregateInputType | true
    }

  export interface OutfitItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutfitItem'], meta: { name: 'OutfitItem' } }
    /**
     * Find zero or one OutfitItem that matches the filter.
     * @param {OutfitItemFindUniqueArgs} args - Arguments to find a OutfitItem
     * @example
     * // Get one OutfitItem
     * const outfitItem = await prisma.outfitItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitItemFindUniqueArgs>(args: SelectSubset<T, OutfitItemFindUniqueArgs<ExtArgs>>): Prisma__OutfitItemClient<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutfitItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitItemFindUniqueOrThrowArgs} args - Arguments to find a OutfitItem
     * @example
     * // Get one OutfitItem
     * const outfitItem = await prisma.outfitItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitItemClient<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitItemFindFirstArgs} args - Arguments to find a OutfitItem
     * @example
     * // Get one OutfitItem
     * const outfitItem = await prisma.outfitItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitItemFindFirstArgs>(args?: SelectSubset<T, OutfitItemFindFirstArgs<ExtArgs>>): Prisma__OutfitItemClient<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitItemFindFirstOrThrowArgs} args - Arguments to find a OutfitItem
     * @example
     * // Get one OutfitItem
     * const outfitItem = await prisma.outfitItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitItemClient<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutfitItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutfitItems
     * const outfitItems = await prisma.outfitItem.findMany()
     * 
     * // Get first 10 OutfitItems
     * const outfitItems = await prisma.outfitItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitItemWithIdOnly = await prisma.outfitItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitItemFindManyArgs>(args?: SelectSubset<T, OutfitItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutfitItem.
     * @param {OutfitItemCreateArgs} args - Arguments to create a OutfitItem.
     * @example
     * // Create one OutfitItem
     * const OutfitItem = await prisma.outfitItem.create({
     *   data: {
     *     // ... data to create a OutfitItem
     *   }
     * })
     * 
     */
    create<T extends OutfitItemCreateArgs>(args: SelectSubset<T, OutfitItemCreateArgs<ExtArgs>>): Prisma__OutfitItemClient<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutfitItems.
     * @param {OutfitItemCreateManyArgs} args - Arguments to create many OutfitItems.
     * @example
     * // Create many OutfitItems
     * const outfitItem = await prisma.outfitItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitItemCreateManyArgs>(args?: SelectSubset<T, OutfitItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutfitItems and returns the data saved in the database.
     * @param {OutfitItemCreateManyAndReturnArgs} args - Arguments to create many OutfitItems.
     * @example
     * // Create many OutfitItems
     * const outfitItem = await prisma.outfitItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutfitItems and only return the `id`
     * const outfitItemWithIdOnly = await prisma.outfitItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutfitItem.
     * @param {OutfitItemDeleteArgs} args - Arguments to delete one OutfitItem.
     * @example
     * // Delete one OutfitItem
     * const OutfitItem = await prisma.outfitItem.delete({
     *   where: {
     *     // ... filter to delete one OutfitItem
     *   }
     * })
     * 
     */
    delete<T extends OutfitItemDeleteArgs>(args: SelectSubset<T, OutfitItemDeleteArgs<ExtArgs>>): Prisma__OutfitItemClient<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutfitItem.
     * @param {OutfitItemUpdateArgs} args - Arguments to update one OutfitItem.
     * @example
     * // Update one OutfitItem
     * const outfitItem = await prisma.outfitItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitItemUpdateArgs>(args: SelectSubset<T, OutfitItemUpdateArgs<ExtArgs>>): Prisma__OutfitItemClient<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutfitItems.
     * @param {OutfitItemDeleteManyArgs} args - Arguments to filter OutfitItems to delete.
     * @example
     * // Delete a few OutfitItems
     * const { count } = await prisma.outfitItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitItemDeleteManyArgs>(args?: SelectSubset<T, OutfitItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutfitItems
     * const outfitItem = await prisma.outfitItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitItemUpdateManyArgs>(args: SelectSubset<T, OutfitItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitItems and returns the data updated in the database.
     * @param {OutfitItemUpdateManyAndReturnArgs} args - Arguments to update many OutfitItems.
     * @example
     * // Update many OutfitItems
     * const outfitItem = await prisma.outfitItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutfitItems and only return the `id`
     * const outfitItemWithIdOnly = await prisma.outfitItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutfitItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutfitItem.
     * @param {OutfitItemUpsertArgs} args - Arguments to update or create a OutfitItem.
     * @example
     * // Update or create a OutfitItem
     * const outfitItem = await prisma.outfitItem.upsert({
     *   create: {
     *     // ... data to create a OutfitItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutfitItem we want to update
     *   }
     * })
     */
    upsert<T extends OutfitItemUpsertArgs>(args: SelectSubset<T, OutfitItemUpsertArgs<ExtArgs>>): Prisma__OutfitItemClient<$Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutfitItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitItemCountArgs} args - Arguments to filter OutfitItems to count.
     * @example
     * // Count the number of OutfitItems
     * const count = await prisma.outfitItem.count({
     *   where: {
     *     // ... the filter for the OutfitItems we want to count
     *   }
     * })
    **/
    count<T extends OutfitItemCountArgs>(
      args?: Subset<T, OutfitItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutfitItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutfitItemAggregateArgs>(args: Subset<T, OutfitItemAggregateArgs>): Prisma.PrismaPromise<GetOutfitItemAggregateType<T>>

    /**
     * Group by OutfitItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitItemGroupByArgs} args - Group by arguments.
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
      T extends OutfitItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitItemGroupByArgs['orderBy'] }
        : { orderBy?: OutfitItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OutfitItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutfitItem model
   */
  readonly fields: OutfitItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutfitItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outfit<T extends OutfitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutfitDefaultArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clothingItem<T extends ClothingItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClothingItemDefaultArgs<ExtArgs>>): Prisma__ClothingItemClient<$Result.GetResult<Prisma.$ClothingItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutfitItem model
   */
  interface OutfitItemFieldRefs {
    readonly id: FieldRef<"OutfitItem", 'String'>
    readonly outfitId: FieldRef<"OutfitItem", 'String'>
    readonly clothingItemId: FieldRef<"OutfitItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OutfitItem findUnique
   */
  export type OutfitItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * Filter, which OutfitItem to fetch.
     */
    where: OutfitItemWhereUniqueInput
  }

  /**
   * OutfitItem findUniqueOrThrow
   */
  export type OutfitItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * Filter, which OutfitItem to fetch.
     */
    where: OutfitItemWhereUniqueInput
  }

  /**
   * OutfitItem findFirst
   */
  export type OutfitItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * Filter, which OutfitItem to fetch.
     */
    where?: OutfitItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitItems to fetch.
     */
    orderBy?: OutfitItemOrderByWithRelationInput | OutfitItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitItems.
     */
    cursor?: OutfitItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitItems.
     */
    distinct?: OutfitItemScalarFieldEnum | OutfitItemScalarFieldEnum[]
  }

  /**
   * OutfitItem findFirstOrThrow
   */
  export type OutfitItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * Filter, which OutfitItem to fetch.
     */
    where?: OutfitItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitItems to fetch.
     */
    orderBy?: OutfitItemOrderByWithRelationInput | OutfitItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitItems.
     */
    cursor?: OutfitItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitItems.
     */
    distinct?: OutfitItemScalarFieldEnum | OutfitItemScalarFieldEnum[]
  }

  /**
   * OutfitItem findMany
   */
  export type OutfitItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * Filter, which OutfitItems to fetch.
     */
    where?: OutfitItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitItems to fetch.
     */
    orderBy?: OutfitItemOrderByWithRelationInput | OutfitItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutfitItems.
     */
    cursor?: OutfitItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitItems.
     */
    skip?: number
    distinct?: OutfitItemScalarFieldEnum | OutfitItemScalarFieldEnum[]
  }

  /**
   * OutfitItem create
   */
  export type OutfitItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OutfitItem.
     */
    data: XOR<OutfitItemCreateInput, OutfitItemUncheckedCreateInput>
  }

  /**
   * OutfitItem createMany
   */
  export type OutfitItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutfitItems.
     */
    data: OutfitItemCreateManyInput | OutfitItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutfitItem createManyAndReturn
   */
  export type OutfitItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * The data used to create many OutfitItems.
     */
    data: OutfitItemCreateManyInput | OutfitItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitItem update
   */
  export type OutfitItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OutfitItem.
     */
    data: XOR<OutfitItemUpdateInput, OutfitItemUncheckedUpdateInput>
    /**
     * Choose, which OutfitItem to update.
     */
    where: OutfitItemWhereUniqueInput
  }

  /**
   * OutfitItem updateMany
   */
  export type OutfitItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutfitItems.
     */
    data: XOR<OutfitItemUpdateManyMutationInput, OutfitItemUncheckedUpdateManyInput>
    /**
     * Filter which OutfitItems to update
     */
    where?: OutfitItemWhereInput
    /**
     * Limit how many OutfitItems to update.
     */
    limit?: number
  }

  /**
   * OutfitItem updateManyAndReturn
   */
  export type OutfitItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * The data used to update OutfitItems.
     */
    data: XOR<OutfitItemUpdateManyMutationInput, OutfitItemUncheckedUpdateManyInput>
    /**
     * Filter which OutfitItems to update
     */
    where?: OutfitItemWhereInput
    /**
     * Limit how many OutfitItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitItem upsert
   */
  export type OutfitItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OutfitItem to update in case it exists.
     */
    where: OutfitItemWhereUniqueInput
    /**
     * In case the OutfitItem found by the `where` argument doesn't exist, create a new OutfitItem with this data.
     */
    create: XOR<OutfitItemCreateInput, OutfitItemUncheckedCreateInput>
    /**
     * In case the OutfitItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitItemUpdateInput, OutfitItemUncheckedUpdateInput>
  }

  /**
   * OutfitItem delete
   */
  export type OutfitItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
    /**
     * Filter which OutfitItem to delete.
     */
    where: OutfitItemWhereUniqueInput
  }

  /**
   * OutfitItem deleteMany
   */
  export type OutfitItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitItems to delete
     */
    where?: OutfitItemWhereInput
    /**
     * Limit how many OutfitItems to delete.
     */
    limit?: number
  }

  /**
   * OutfitItem without action
   */
  export type OutfitItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: OutfitItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: OutfitItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    photoURL: 'photoURL',
    provider: 'provider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ClothingItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    brand: 'brand',
    color: 'color',
    size: 'size',
    price: 'price',
    purchaseDate: 'purchaseDate',
    imageUrl: 'imageUrl',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type ClothingItemScalarFieldEnum = (typeof ClothingItemScalarFieldEnum)[keyof typeof ClothingItemScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const OutfitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    occasion: 'occasion',
    season: 'season',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type OutfitScalarFieldEnum = (typeof OutfitScalarFieldEnum)[keyof typeof OutfitScalarFieldEnum]


  export const OutfitItemScalarFieldEnum: {
    id: 'id',
    outfitId: 'outfitId',
    clothingItemId: 'clothingItemId'
  };

  export type OutfitItemScalarFieldEnum = (typeof OutfitItemScalarFieldEnum)[keyof typeof OutfitItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    photoURL?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clothingItems?: ClothingItemListRelationFilter
    outfits?: OutfitListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    photoURL?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clothingItems?: ClothingItemOrderByRelationAggregateInput
    outfits?: OutfitOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    photoURL?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clothingItems?: ClothingItemListRelationFilter
    outfits?: OutfitListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    photoURL?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoURL?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    clothingItems?: ClothingItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clothingItems?: ClothingItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    clothingItems?: ClothingItemListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ClothingItemWhereInput = {
    AND?: ClothingItemWhereInput | ClothingItemWhereInput[]
    OR?: ClothingItemWhereInput[]
    NOT?: ClothingItemWhereInput | ClothingItemWhereInput[]
    id?: StringFilter<"ClothingItem"> | string
    name?: StringFilter<"ClothingItem"> | string
    description?: StringNullableFilter<"ClothingItem"> | string | null
    brand?: StringNullableFilter<"ClothingItem"> | string | null
    color?: StringNullableFilter<"ClothingItem"> | string | null
    size?: StringNullableFilter<"ClothingItem"> | string | null
    price?: FloatNullableFilter<"ClothingItem"> | number | null
    purchaseDate?: DateTimeNullableFilter<"ClothingItem"> | Date | string | null
    imageUrl?: StringNullableFilter<"ClothingItem"> | string | null
    notes?: StringNullableFilter<"ClothingItem"> | string | null
    createdAt?: DateTimeFilter<"ClothingItem"> | Date | string
    updatedAt?: DateTimeFilter<"ClothingItem"> | Date | string
    userId?: StringFilter<"ClothingItem"> | string
    categoryId?: StringFilter<"ClothingItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tags?: TagListRelationFilter
    outfitItems?: OutfitItemListRelationFilter
  }

  export type ClothingItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    outfitItems?: OutfitItemOrderByRelationAggregateInput
  }

  export type ClothingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClothingItemWhereInput | ClothingItemWhereInput[]
    OR?: ClothingItemWhereInput[]
    NOT?: ClothingItemWhereInput | ClothingItemWhereInput[]
    name?: StringFilter<"ClothingItem"> | string
    description?: StringNullableFilter<"ClothingItem"> | string | null
    brand?: StringNullableFilter<"ClothingItem"> | string | null
    color?: StringNullableFilter<"ClothingItem"> | string | null
    size?: StringNullableFilter<"ClothingItem"> | string | null
    price?: FloatNullableFilter<"ClothingItem"> | number | null
    purchaseDate?: DateTimeNullableFilter<"ClothingItem"> | Date | string | null
    imageUrl?: StringNullableFilter<"ClothingItem"> | string | null
    notes?: StringNullableFilter<"ClothingItem"> | string | null
    createdAt?: DateTimeFilter<"ClothingItem"> | Date | string
    updatedAt?: DateTimeFilter<"ClothingItem"> | Date | string
    userId?: StringFilter<"ClothingItem"> | string
    categoryId?: StringFilter<"ClothingItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tags?: TagListRelationFilter
    outfitItems?: OutfitItemListRelationFilter
  }, "id">

  export type ClothingItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: ClothingItemCountOrderByAggregateInput
    _avg?: ClothingItemAvgOrderByAggregateInput
    _max?: ClothingItemMaxOrderByAggregateInput
    _min?: ClothingItemMinOrderByAggregateInput
    _sum?: ClothingItemSumOrderByAggregateInput
  }

  export type ClothingItemScalarWhereWithAggregatesInput = {
    AND?: ClothingItemScalarWhereWithAggregatesInput | ClothingItemScalarWhereWithAggregatesInput[]
    OR?: ClothingItemScalarWhereWithAggregatesInput[]
    NOT?: ClothingItemScalarWhereWithAggregatesInput | ClothingItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClothingItem"> | string
    name?: StringWithAggregatesFilter<"ClothingItem"> | string
    description?: StringNullableWithAggregatesFilter<"ClothingItem"> | string | null
    brand?: StringNullableWithAggregatesFilter<"ClothingItem"> | string | null
    color?: StringNullableWithAggregatesFilter<"ClothingItem"> | string | null
    size?: StringNullableWithAggregatesFilter<"ClothingItem"> | string | null
    price?: FloatNullableWithAggregatesFilter<"ClothingItem"> | number | null
    purchaseDate?: DateTimeNullableWithAggregatesFilter<"ClothingItem"> | Date | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"ClothingItem"> | string | null
    notes?: StringNullableWithAggregatesFilter<"ClothingItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClothingItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClothingItem"> | Date | string
    userId?: StringWithAggregatesFilter<"ClothingItem"> | string
    categoryId?: StringWithAggregatesFilter<"ClothingItem"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    clothingItems?: ClothingItemListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clothingItems?: ClothingItemOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    color?: StringNullableFilter<"Tag"> | string | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    clothingItems?: ClothingItemListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringNullableWithAggregatesFilter<"Tag"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type OutfitWhereInput = {
    AND?: OutfitWhereInput | OutfitWhereInput[]
    OR?: OutfitWhereInput[]
    NOT?: OutfitWhereInput | OutfitWhereInput[]
    id?: StringFilter<"Outfit"> | string
    name?: StringFilter<"Outfit"> | string
    description?: StringNullableFilter<"Outfit"> | string | null
    occasion?: StringNullableFilter<"Outfit"> | string | null
    season?: StringNullableFilter<"Outfit"> | string | null
    imageUrl?: StringNullableFilter<"Outfit"> | string | null
    createdAt?: DateTimeFilter<"Outfit"> | Date | string
    updatedAt?: DateTimeFilter<"Outfit"> | Date | string
    userId?: StringFilter<"Outfit"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    outfitItems?: OutfitItemListRelationFilter
  }

  export type OutfitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    occasion?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    outfitItems?: OutfitItemOrderByRelationAggregateInput
  }

  export type OutfitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutfitWhereInput | OutfitWhereInput[]
    OR?: OutfitWhereInput[]
    NOT?: OutfitWhereInput | OutfitWhereInput[]
    name?: StringFilter<"Outfit"> | string
    description?: StringNullableFilter<"Outfit"> | string | null
    occasion?: StringNullableFilter<"Outfit"> | string | null
    season?: StringNullableFilter<"Outfit"> | string | null
    imageUrl?: StringNullableFilter<"Outfit"> | string | null
    createdAt?: DateTimeFilter<"Outfit"> | Date | string
    updatedAt?: DateTimeFilter<"Outfit"> | Date | string
    userId?: StringFilter<"Outfit"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    outfitItems?: OutfitItemListRelationFilter
  }, "id">

  export type OutfitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    occasion?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: OutfitCountOrderByAggregateInput
    _max?: OutfitMaxOrderByAggregateInput
    _min?: OutfitMinOrderByAggregateInput
  }

  export type OutfitScalarWhereWithAggregatesInput = {
    AND?: OutfitScalarWhereWithAggregatesInput | OutfitScalarWhereWithAggregatesInput[]
    OR?: OutfitScalarWhereWithAggregatesInput[]
    NOT?: OutfitScalarWhereWithAggregatesInput | OutfitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outfit"> | string
    name?: StringWithAggregatesFilter<"Outfit"> | string
    description?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    occasion?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    season?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Outfit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Outfit"> | Date | string
    userId?: StringWithAggregatesFilter<"Outfit"> | string
  }

  export type OutfitItemWhereInput = {
    AND?: OutfitItemWhereInput | OutfitItemWhereInput[]
    OR?: OutfitItemWhereInput[]
    NOT?: OutfitItemWhereInput | OutfitItemWhereInput[]
    id?: StringFilter<"OutfitItem"> | string
    outfitId?: StringFilter<"OutfitItem"> | string
    clothingItemId?: StringFilter<"OutfitItem"> | string
    outfit?: XOR<OutfitScalarRelationFilter, OutfitWhereInput>
    clothingItem?: XOR<ClothingItemScalarRelationFilter, ClothingItemWhereInput>
  }

  export type OutfitItemOrderByWithRelationInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothingItemId?: SortOrder
    outfit?: OutfitOrderByWithRelationInput
    clothingItem?: ClothingItemOrderByWithRelationInput
  }

  export type OutfitItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    outfitId_clothingItemId?: OutfitItemOutfitIdClothingItemIdCompoundUniqueInput
    AND?: OutfitItemWhereInput | OutfitItemWhereInput[]
    OR?: OutfitItemWhereInput[]
    NOT?: OutfitItemWhereInput | OutfitItemWhereInput[]
    outfitId?: StringFilter<"OutfitItem"> | string
    clothingItemId?: StringFilter<"OutfitItem"> | string
    outfit?: XOR<OutfitScalarRelationFilter, OutfitWhereInput>
    clothingItem?: XOR<ClothingItemScalarRelationFilter, ClothingItemWhereInput>
  }, "id" | "outfitId_clothingItemId">

  export type OutfitItemOrderByWithAggregationInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothingItemId?: SortOrder
    _count?: OutfitItemCountOrderByAggregateInput
    _max?: OutfitItemMaxOrderByAggregateInput
    _min?: OutfitItemMinOrderByAggregateInput
  }

  export type OutfitItemScalarWhereWithAggregatesInput = {
    AND?: OutfitItemScalarWhereWithAggregatesInput | OutfitItemScalarWhereWithAggregatesInput[]
    OR?: OutfitItemScalarWhereWithAggregatesInput[]
    NOT?: OutfitItemScalarWhereWithAggregatesInput | OutfitItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutfitItem"> | string
    outfitId?: StringWithAggregatesFilter<"OutfitItem"> | string
    clothingItemId?: StringWithAggregatesFilter<"OutfitItem"> | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    name?: string | null
    photoURL?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothingItems?: ClothingItemCreateNestedManyWithoutUserInput
    outfits?: OutfitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    name?: string | null
    photoURL?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothingItems?: ClothingItemUncheckedCreateNestedManyWithoutUserInput
    outfits?: OutfitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothingItems?: ClothingItemUpdateManyWithoutUserNestedInput
    outfits?: OutfitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothingItems?: ClothingItemUncheckedUpdateManyWithoutUserNestedInput
    outfits?: OutfitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    name?: string | null
    photoURL?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothingItems?: ClothingItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothingItems?: ClothingItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothingItems?: ClothingItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothingItems?: ClothingItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothingItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClothingItemsInput
    category: CategoryCreateNestedOneWithoutClothingItemsInput
    tags?: TagCreateNestedManyWithoutClothingItemsInput
    outfitItems?: OutfitItemCreateNestedManyWithoutClothingItemInput
  }

  export type ClothingItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    tags?: TagUncheckedCreateNestedManyWithoutClothingItemsInput
    outfitItems?: OutfitItemUncheckedCreateNestedManyWithoutClothingItemInput
  }

  export type ClothingItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClothingItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutClothingItemsNestedInput
    tags?: TagUpdateManyWithoutClothingItemsNestedInput
    outfitItems?: OutfitItemUpdateManyWithoutClothingItemNestedInput
  }

  export type ClothingItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutClothingItemsNestedInput
    outfitItems?: OutfitItemUncheckedUpdateManyWithoutClothingItemNestedInput
  }

  export type ClothingItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
  }

  export type ClothingItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothingItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothingItems?: ClothingItemCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothingItems?: ClothingItemUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothingItems?: ClothingItemUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothingItems?: ClothingItemUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitCreateInput = {
    id?: string
    name: string
    description?: string | null
    occasion?: string | null
    season?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOutfitsInput
    outfitItems?: OutfitItemCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    occasion?: string | null
    season?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    outfitItems?: OutfitItemUncheckedCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOutfitsNestedInput
    outfitItems?: OutfitItemUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    outfitItems?: OutfitItemUncheckedUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    occasion?: string | null
    season?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type OutfitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitItemCreateInput = {
    id?: string
    outfit: OutfitCreateNestedOneWithoutOutfitItemsInput
    clothingItem: ClothingItemCreateNestedOneWithoutOutfitItemsInput
  }

  export type OutfitItemUncheckedCreateInput = {
    id?: string
    outfitId: string
    clothingItemId: string
  }

  export type OutfitItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfit?: OutfitUpdateOneRequiredWithoutOutfitItemsNestedInput
    clothingItem?: ClothingItemUpdateOneRequiredWithoutOutfitItemsNestedInput
  }

  export type OutfitItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfitId?: StringFieldUpdateOperationsInput | string
    clothingItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitItemCreateManyInput = {
    id?: string
    outfitId: string
    clothingItemId: string
  }

  export type OutfitItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfitId?: StringFieldUpdateOperationsInput | string
    clothingItemId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClothingItemListRelationFilter = {
    every?: ClothingItemWhereInput
    some?: ClothingItemWhereInput
    none?: ClothingItemWhereInput
  }

  export type OutfitListRelationFilter = {
    every?: OutfitWhereInput
    some?: OutfitWhereInput
    none?: OutfitWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClothingItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutfitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    photoURL?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    photoURL?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    photoURL?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type OutfitItemListRelationFilter = {
    every?: OutfitItemWhereInput
    some?: OutfitItemWhereInput
    none?: OutfitItemWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutfitItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClothingItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    purchaseDate?: SortOrder
    imageUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type ClothingItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ClothingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    purchaseDate?: SortOrder
    imageUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type ClothingItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    color?: SortOrder
    size?: SortOrder
    price?: SortOrder
    purchaseDate?: SortOrder
    imageUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type ClothingItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutfitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    occasion?: SortOrder
    season?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OutfitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    occasion?: SortOrder
    season?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OutfitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    occasion?: SortOrder
    season?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OutfitScalarRelationFilter = {
    is?: OutfitWhereInput
    isNot?: OutfitWhereInput
  }

  export type ClothingItemScalarRelationFilter = {
    is?: ClothingItemWhereInput
    isNot?: ClothingItemWhereInput
  }

  export type OutfitItemOutfitIdClothingItemIdCompoundUniqueInput = {
    outfitId: string
    clothingItemId: string
  }

  export type OutfitItemCountOrderByAggregateInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothingItemId?: SortOrder
  }

  export type OutfitItemMaxOrderByAggregateInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothingItemId?: SortOrder
  }

  export type OutfitItemMinOrderByAggregateInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothingItemId?: SortOrder
  }

  export type ClothingItemCreateNestedManyWithoutUserInput = {
    create?: XOR<ClothingItemCreateWithoutUserInput, ClothingItemUncheckedCreateWithoutUserInput> | ClothingItemCreateWithoutUserInput[] | ClothingItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutUserInput | ClothingItemCreateOrConnectWithoutUserInput[]
    createMany?: ClothingItemCreateManyUserInputEnvelope
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
  }

  export type OutfitCreateNestedManyWithoutUserInput = {
    create?: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput> | OutfitCreateWithoutUserInput[] | OutfitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutUserInput | OutfitCreateOrConnectWithoutUserInput[]
    createMany?: OutfitCreateManyUserInputEnvelope
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
  }

  export type ClothingItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClothingItemCreateWithoutUserInput, ClothingItemUncheckedCreateWithoutUserInput> | ClothingItemCreateWithoutUserInput[] | ClothingItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutUserInput | ClothingItemCreateOrConnectWithoutUserInput[]
    createMany?: ClothingItemCreateManyUserInputEnvelope
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
  }

  export type OutfitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput> | OutfitCreateWithoutUserInput[] | OutfitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutUserInput | OutfitCreateOrConnectWithoutUserInput[]
    createMany?: OutfitCreateManyUserInputEnvelope
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
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

  export type ClothingItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClothingItemCreateWithoutUserInput, ClothingItemUncheckedCreateWithoutUserInput> | ClothingItemCreateWithoutUserInput[] | ClothingItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutUserInput | ClothingItemCreateOrConnectWithoutUserInput[]
    upsert?: ClothingItemUpsertWithWhereUniqueWithoutUserInput | ClothingItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClothingItemCreateManyUserInputEnvelope
    set?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    disconnect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    delete?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    update?: ClothingItemUpdateWithWhereUniqueWithoutUserInput | ClothingItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClothingItemUpdateManyWithWhereWithoutUserInput | ClothingItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClothingItemScalarWhereInput | ClothingItemScalarWhereInput[]
  }

  export type OutfitUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput> | OutfitCreateWithoutUserInput[] | OutfitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutUserInput | OutfitCreateOrConnectWithoutUserInput[]
    upsert?: OutfitUpsertWithWhereUniqueWithoutUserInput | OutfitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutfitCreateManyUserInputEnvelope
    set?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    disconnect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    delete?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    update?: OutfitUpdateWithWhereUniqueWithoutUserInput | OutfitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutfitUpdateManyWithWhereWithoutUserInput | OutfitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
  }

  export type ClothingItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClothingItemCreateWithoutUserInput, ClothingItemUncheckedCreateWithoutUserInput> | ClothingItemCreateWithoutUserInput[] | ClothingItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutUserInput | ClothingItemCreateOrConnectWithoutUserInput[]
    upsert?: ClothingItemUpsertWithWhereUniqueWithoutUserInput | ClothingItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClothingItemCreateManyUserInputEnvelope
    set?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    disconnect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    delete?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    update?: ClothingItemUpdateWithWhereUniqueWithoutUserInput | ClothingItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClothingItemUpdateManyWithWhereWithoutUserInput | ClothingItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClothingItemScalarWhereInput | ClothingItemScalarWhereInput[]
  }

  export type OutfitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput> | OutfitCreateWithoutUserInput[] | OutfitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutUserInput | OutfitCreateOrConnectWithoutUserInput[]
    upsert?: OutfitUpsertWithWhereUniqueWithoutUserInput | OutfitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutfitCreateManyUserInputEnvelope
    set?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    disconnect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    delete?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    update?: OutfitUpdateWithWhereUniqueWithoutUserInput | OutfitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutfitUpdateManyWithWhereWithoutUserInput | OutfitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
  }

  export type ClothingItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ClothingItemCreateWithoutCategoryInput, ClothingItemUncheckedCreateWithoutCategoryInput> | ClothingItemCreateWithoutCategoryInput[] | ClothingItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutCategoryInput | ClothingItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ClothingItemCreateManyCategoryInputEnvelope
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
  }

  export type ClothingItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ClothingItemCreateWithoutCategoryInput, ClothingItemUncheckedCreateWithoutCategoryInput> | ClothingItemCreateWithoutCategoryInput[] | ClothingItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutCategoryInput | ClothingItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ClothingItemCreateManyCategoryInputEnvelope
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
  }

  export type ClothingItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ClothingItemCreateWithoutCategoryInput, ClothingItemUncheckedCreateWithoutCategoryInput> | ClothingItemCreateWithoutCategoryInput[] | ClothingItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutCategoryInput | ClothingItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ClothingItemUpsertWithWhereUniqueWithoutCategoryInput | ClothingItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ClothingItemCreateManyCategoryInputEnvelope
    set?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    disconnect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    delete?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    update?: ClothingItemUpdateWithWhereUniqueWithoutCategoryInput | ClothingItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ClothingItemUpdateManyWithWhereWithoutCategoryInput | ClothingItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ClothingItemScalarWhereInput | ClothingItemScalarWhereInput[]
  }

  export type ClothingItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ClothingItemCreateWithoutCategoryInput, ClothingItemUncheckedCreateWithoutCategoryInput> | ClothingItemCreateWithoutCategoryInput[] | ClothingItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutCategoryInput | ClothingItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ClothingItemUpsertWithWhereUniqueWithoutCategoryInput | ClothingItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ClothingItemCreateManyCategoryInputEnvelope
    set?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    disconnect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    delete?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    update?: ClothingItemUpdateWithWhereUniqueWithoutCategoryInput | ClothingItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ClothingItemUpdateManyWithWhereWithoutCategoryInput | ClothingItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ClothingItemScalarWhereInput | ClothingItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClothingItemsInput = {
    create?: XOR<UserCreateWithoutClothingItemsInput, UserUncheckedCreateWithoutClothingItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClothingItemsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutClothingItemsInput = {
    create?: XOR<CategoryCreateWithoutClothingItemsInput, CategoryUncheckedCreateWithoutClothingItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutClothingItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutClothingItemsInput = {
    create?: XOR<TagCreateWithoutClothingItemsInput, TagUncheckedCreateWithoutClothingItemsInput> | TagCreateWithoutClothingItemsInput[] | TagUncheckedCreateWithoutClothingItemsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutClothingItemsInput | TagCreateOrConnectWithoutClothingItemsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type OutfitItemCreateNestedManyWithoutClothingItemInput = {
    create?: XOR<OutfitItemCreateWithoutClothingItemInput, OutfitItemUncheckedCreateWithoutClothingItemInput> | OutfitItemCreateWithoutClothingItemInput[] | OutfitItemUncheckedCreateWithoutClothingItemInput[]
    connectOrCreate?: OutfitItemCreateOrConnectWithoutClothingItemInput | OutfitItemCreateOrConnectWithoutClothingItemInput[]
    createMany?: OutfitItemCreateManyClothingItemInputEnvelope
    connect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutClothingItemsInput = {
    create?: XOR<TagCreateWithoutClothingItemsInput, TagUncheckedCreateWithoutClothingItemsInput> | TagCreateWithoutClothingItemsInput[] | TagUncheckedCreateWithoutClothingItemsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutClothingItemsInput | TagCreateOrConnectWithoutClothingItemsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type OutfitItemUncheckedCreateNestedManyWithoutClothingItemInput = {
    create?: XOR<OutfitItemCreateWithoutClothingItemInput, OutfitItemUncheckedCreateWithoutClothingItemInput> | OutfitItemCreateWithoutClothingItemInput[] | OutfitItemUncheckedCreateWithoutClothingItemInput[]
    connectOrCreate?: OutfitItemCreateOrConnectWithoutClothingItemInput | OutfitItemCreateOrConnectWithoutClothingItemInput[]
    createMany?: OutfitItemCreateManyClothingItemInputEnvelope
    connect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutClothingItemsNestedInput = {
    create?: XOR<UserCreateWithoutClothingItemsInput, UserUncheckedCreateWithoutClothingItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClothingItemsInput
    upsert?: UserUpsertWithoutClothingItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClothingItemsInput, UserUpdateWithoutClothingItemsInput>, UserUncheckedUpdateWithoutClothingItemsInput>
  }

  export type CategoryUpdateOneRequiredWithoutClothingItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutClothingItemsInput, CategoryUncheckedCreateWithoutClothingItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutClothingItemsInput
    upsert?: CategoryUpsertWithoutClothingItemsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutClothingItemsInput, CategoryUpdateWithoutClothingItemsInput>, CategoryUncheckedUpdateWithoutClothingItemsInput>
  }

  export type TagUpdateManyWithoutClothingItemsNestedInput = {
    create?: XOR<TagCreateWithoutClothingItemsInput, TagUncheckedCreateWithoutClothingItemsInput> | TagCreateWithoutClothingItemsInput[] | TagUncheckedCreateWithoutClothingItemsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutClothingItemsInput | TagCreateOrConnectWithoutClothingItemsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutClothingItemsInput | TagUpsertWithWhereUniqueWithoutClothingItemsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutClothingItemsInput | TagUpdateWithWhereUniqueWithoutClothingItemsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutClothingItemsInput | TagUpdateManyWithWhereWithoutClothingItemsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type OutfitItemUpdateManyWithoutClothingItemNestedInput = {
    create?: XOR<OutfitItemCreateWithoutClothingItemInput, OutfitItemUncheckedCreateWithoutClothingItemInput> | OutfitItemCreateWithoutClothingItemInput[] | OutfitItemUncheckedCreateWithoutClothingItemInput[]
    connectOrCreate?: OutfitItemCreateOrConnectWithoutClothingItemInput | OutfitItemCreateOrConnectWithoutClothingItemInput[]
    upsert?: OutfitItemUpsertWithWhereUniqueWithoutClothingItemInput | OutfitItemUpsertWithWhereUniqueWithoutClothingItemInput[]
    createMany?: OutfitItemCreateManyClothingItemInputEnvelope
    set?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    disconnect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    delete?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    connect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    update?: OutfitItemUpdateWithWhereUniqueWithoutClothingItemInput | OutfitItemUpdateWithWhereUniqueWithoutClothingItemInput[]
    updateMany?: OutfitItemUpdateManyWithWhereWithoutClothingItemInput | OutfitItemUpdateManyWithWhereWithoutClothingItemInput[]
    deleteMany?: OutfitItemScalarWhereInput | OutfitItemScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutClothingItemsNestedInput = {
    create?: XOR<TagCreateWithoutClothingItemsInput, TagUncheckedCreateWithoutClothingItemsInput> | TagCreateWithoutClothingItemsInput[] | TagUncheckedCreateWithoutClothingItemsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutClothingItemsInput | TagCreateOrConnectWithoutClothingItemsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutClothingItemsInput | TagUpsertWithWhereUniqueWithoutClothingItemsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutClothingItemsInput | TagUpdateWithWhereUniqueWithoutClothingItemsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutClothingItemsInput | TagUpdateManyWithWhereWithoutClothingItemsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type OutfitItemUncheckedUpdateManyWithoutClothingItemNestedInput = {
    create?: XOR<OutfitItemCreateWithoutClothingItemInput, OutfitItemUncheckedCreateWithoutClothingItemInput> | OutfitItemCreateWithoutClothingItemInput[] | OutfitItemUncheckedCreateWithoutClothingItemInput[]
    connectOrCreate?: OutfitItemCreateOrConnectWithoutClothingItemInput | OutfitItemCreateOrConnectWithoutClothingItemInput[]
    upsert?: OutfitItemUpsertWithWhereUniqueWithoutClothingItemInput | OutfitItemUpsertWithWhereUniqueWithoutClothingItemInput[]
    createMany?: OutfitItemCreateManyClothingItemInputEnvelope
    set?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    disconnect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    delete?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    connect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    update?: OutfitItemUpdateWithWhereUniqueWithoutClothingItemInput | OutfitItemUpdateWithWhereUniqueWithoutClothingItemInput[]
    updateMany?: OutfitItemUpdateManyWithWhereWithoutClothingItemInput | OutfitItemUpdateManyWithWhereWithoutClothingItemInput[]
    deleteMany?: OutfitItemScalarWhereInput | OutfitItemScalarWhereInput[]
  }

  export type ClothingItemCreateNestedManyWithoutTagsInput = {
    create?: XOR<ClothingItemCreateWithoutTagsInput, ClothingItemUncheckedCreateWithoutTagsInput> | ClothingItemCreateWithoutTagsInput[] | ClothingItemUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutTagsInput | ClothingItemCreateOrConnectWithoutTagsInput[]
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
  }

  export type ClothingItemUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ClothingItemCreateWithoutTagsInput, ClothingItemUncheckedCreateWithoutTagsInput> | ClothingItemCreateWithoutTagsInput[] | ClothingItemUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutTagsInput | ClothingItemCreateOrConnectWithoutTagsInput[]
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
  }

  export type ClothingItemUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ClothingItemCreateWithoutTagsInput, ClothingItemUncheckedCreateWithoutTagsInput> | ClothingItemCreateWithoutTagsInput[] | ClothingItemUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutTagsInput | ClothingItemCreateOrConnectWithoutTagsInput[]
    upsert?: ClothingItemUpsertWithWhereUniqueWithoutTagsInput | ClothingItemUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    disconnect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    delete?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    update?: ClothingItemUpdateWithWhereUniqueWithoutTagsInput | ClothingItemUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ClothingItemUpdateManyWithWhereWithoutTagsInput | ClothingItemUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ClothingItemScalarWhereInput | ClothingItemScalarWhereInput[]
  }

  export type ClothingItemUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ClothingItemCreateWithoutTagsInput, ClothingItemUncheckedCreateWithoutTagsInput> | ClothingItemCreateWithoutTagsInput[] | ClothingItemUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ClothingItemCreateOrConnectWithoutTagsInput | ClothingItemCreateOrConnectWithoutTagsInput[]
    upsert?: ClothingItemUpsertWithWhereUniqueWithoutTagsInput | ClothingItemUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    disconnect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    delete?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    connect?: ClothingItemWhereUniqueInput | ClothingItemWhereUniqueInput[]
    update?: ClothingItemUpdateWithWhereUniqueWithoutTagsInput | ClothingItemUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ClothingItemUpdateManyWithWhereWithoutTagsInput | ClothingItemUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ClothingItemScalarWhereInput | ClothingItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOutfitsInput = {
    create?: XOR<UserCreateWithoutOutfitsInput, UserUncheckedCreateWithoutOutfitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutfitsInput
    connect?: UserWhereUniqueInput
  }

  export type OutfitItemCreateNestedManyWithoutOutfitInput = {
    create?: XOR<OutfitItemCreateWithoutOutfitInput, OutfitItemUncheckedCreateWithoutOutfitInput> | OutfitItemCreateWithoutOutfitInput[] | OutfitItemUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitItemCreateOrConnectWithoutOutfitInput | OutfitItemCreateOrConnectWithoutOutfitInput[]
    createMany?: OutfitItemCreateManyOutfitInputEnvelope
    connect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
  }

  export type OutfitItemUncheckedCreateNestedManyWithoutOutfitInput = {
    create?: XOR<OutfitItemCreateWithoutOutfitInput, OutfitItemUncheckedCreateWithoutOutfitInput> | OutfitItemCreateWithoutOutfitInput[] | OutfitItemUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitItemCreateOrConnectWithoutOutfitInput | OutfitItemCreateOrConnectWithoutOutfitInput[]
    createMany?: OutfitItemCreateManyOutfitInputEnvelope
    connect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOutfitsNestedInput = {
    create?: XOR<UserCreateWithoutOutfitsInput, UserUncheckedCreateWithoutOutfitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutfitsInput
    upsert?: UserUpsertWithoutOutfitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOutfitsInput, UserUpdateWithoutOutfitsInput>, UserUncheckedUpdateWithoutOutfitsInput>
  }

  export type OutfitItemUpdateManyWithoutOutfitNestedInput = {
    create?: XOR<OutfitItemCreateWithoutOutfitInput, OutfitItemUncheckedCreateWithoutOutfitInput> | OutfitItemCreateWithoutOutfitInput[] | OutfitItemUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitItemCreateOrConnectWithoutOutfitInput | OutfitItemCreateOrConnectWithoutOutfitInput[]
    upsert?: OutfitItemUpsertWithWhereUniqueWithoutOutfitInput | OutfitItemUpsertWithWhereUniqueWithoutOutfitInput[]
    createMany?: OutfitItemCreateManyOutfitInputEnvelope
    set?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    disconnect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    delete?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    connect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    update?: OutfitItemUpdateWithWhereUniqueWithoutOutfitInput | OutfitItemUpdateWithWhereUniqueWithoutOutfitInput[]
    updateMany?: OutfitItemUpdateManyWithWhereWithoutOutfitInput | OutfitItemUpdateManyWithWhereWithoutOutfitInput[]
    deleteMany?: OutfitItemScalarWhereInput | OutfitItemScalarWhereInput[]
  }

  export type OutfitItemUncheckedUpdateManyWithoutOutfitNestedInput = {
    create?: XOR<OutfitItemCreateWithoutOutfitInput, OutfitItemUncheckedCreateWithoutOutfitInput> | OutfitItemCreateWithoutOutfitInput[] | OutfitItemUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitItemCreateOrConnectWithoutOutfitInput | OutfitItemCreateOrConnectWithoutOutfitInput[]
    upsert?: OutfitItemUpsertWithWhereUniqueWithoutOutfitInput | OutfitItemUpsertWithWhereUniqueWithoutOutfitInput[]
    createMany?: OutfitItemCreateManyOutfitInputEnvelope
    set?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    disconnect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    delete?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    connect?: OutfitItemWhereUniqueInput | OutfitItemWhereUniqueInput[]
    update?: OutfitItemUpdateWithWhereUniqueWithoutOutfitInput | OutfitItemUpdateWithWhereUniqueWithoutOutfitInput[]
    updateMany?: OutfitItemUpdateManyWithWhereWithoutOutfitInput | OutfitItemUpdateManyWithWhereWithoutOutfitInput[]
    deleteMany?: OutfitItemScalarWhereInput | OutfitItemScalarWhereInput[]
  }

  export type OutfitCreateNestedOneWithoutOutfitItemsInput = {
    create?: XOR<OutfitCreateWithoutOutfitItemsInput, OutfitUncheckedCreateWithoutOutfitItemsInput>
    connectOrCreate?: OutfitCreateOrConnectWithoutOutfitItemsInput
    connect?: OutfitWhereUniqueInput
  }

  export type ClothingItemCreateNestedOneWithoutOutfitItemsInput = {
    create?: XOR<ClothingItemCreateWithoutOutfitItemsInput, ClothingItemUncheckedCreateWithoutOutfitItemsInput>
    connectOrCreate?: ClothingItemCreateOrConnectWithoutOutfitItemsInput
    connect?: ClothingItemWhereUniqueInput
  }

  export type OutfitUpdateOneRequiredWithoutOutfitItemsNestedInput = {
    create?: XOR<OutfitCreateWithoutOutfitItemsInput, OutfitUncheckedCreateWithoutOutfitItemsInput>
    connectOrCreate?: OutfitCreateOrConnectWithoutOutfitItemsInput
    upsert?: OutfitUpsertWithoutOutfitItemsInput
    connect?: OutfitWhereUniqueInput
    update?: XOR<XOR<OutfitUpdateToOneWithWhereWithoutOutfitItemsInput, OutfitUpdateWithoutOutfitItemsInput>, OutfitUncheckedUpdateWithoutOutfitItemsInput>
  }

  export type ClothingItemUpdateOneRequiredWithoutOutfitItemsNestedInput = {
    create?: XOR<ClothingItemCreateWithoutOutfitItemsInput, ClothingItemUncheckedCreateWithoutOutfitItemsInput>
    connectOrCreate?: ClothingItemCreateOrConnectWithoutOutfitItemsInput
    upsert?: ClothingItemUpsertWithoutOutfitItemsInput
    connect?: ClothingItemWhereUniqueInput
    update?: XOR<XOR<ClothingItemUpdateToOneWithWhereWithoutOutfitItemsInput, ClothingItemUpdateWithoutOutfitItemsInput>, ClothingItemUncheckedUpdateWithoutOutfitItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClothingItemCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutClothingItemsInput
    tags?: TagCreateNestedManyWithoutClothingItemsInput
    outfitItems?: OutfitItemCreateNestedManyWithoutClothingItemInput
  }

  export type ClothingItemUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    tags?: TagUncheckedCreateNestedManyWithoutClothingItemsInput
    outfitItems?: OutfitItemUncheckedCreateNestedManyWithoutClothingItemInput
  }

  export type ClothingItemCreateOrConnectWithoutUserInput = {
    where: ClothingItemWhereUniqueInput
    create: XOR<ClothingItemCreateWithoutUserInput, ClothingItemUncheckedCreateWithoutUserInput>
  }

  export type ClothingItemCreateManyUserInputEnvelope = {
    data: ClothingItemCreateManyUserInput | ClothingItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OutfitCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    occasion?: string | null
    season?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outfitItems?: OutfitItemCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    occasion?: string | null
    season?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outfitItems?: OutfitItemUncheckedCreateNestedManyWithoutOutfitInput
  }

  export type OutfitCreateOrConnectWithoutUserInput = {
    where: OutfitWhereUniqueInput
    create: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput>
  }

  export type OutfitCreateManyUserInputEnvelope = {
    data: OutfitCreateManyUserInput | OutfitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClothingItemUpsertWithWhereUniqueWithoutUserInput = {
    where: ClothingItemWhereUniqueInput
    update: XOR<ClothingItemUpdateWithoutUserInput, ClothingItemUncheckedUpdateWithoutUserInput>
    create: XOR<ClothingItemCreateWithoutUserInput, ClothingItemUncheckedCreateWithoutUserInput>
  }

  export type ClothingItemUpdateWithWhereUniqueWithoutUserInput = {
    where: ClothingItemWhereUniqueInput
    data: XOR<ClothingItemUpdateWithoutUserInput, ClothingItemUncheckedUpdateWithoutUserInput>
  }

  export type ClothingItemUpdateManyWithWhereWithoutUserInput = {
    where: ClothingItemScalarWhereInput
    data: XOR<ClothingItemUpdateManyMutationInput, ClothingItemUncheckedUpdateManyWithoutUserInput>
  }

  export type ClothingItemScalarWhereInput = {
    AND?: ClothingItemScalarWhereInput | ClothingItemScalarWhereInput[]
    OR?: ClothingItemScalarWhereInput[]
    NOT?: ClothingItemScalarWhereInput | ClothingItemScalarWhereInput[]
    id?: StringFilter<"ClothingItem"> | string
    name?: StringFilter<"ClothingItem"> | string
    description?: StringNullableFilter<"ClothingItem"> | string | null
    brand?: StringNullableFilter<"ClothingItem"> | string | null
    color?: StringNullableFilter<"ClothingItem"> | string | null
    size?: StringNullableFilter<"ClothingItem"> | string | null
    price?: FloatNullableFilter<"ClothingItem"> | number | null
    purchaseDate?: DateTimeNullableFilter<"ClothingItem"> | Date | string | null
    imageUrl?: StringNullableFilter<"ClothingItem"> | string | null
    notes?: StringNullableFilter<"ClothingItem"> | string | null
    createdAt?: DateTimeFilter<"ClothingItem"> | Date | string
    updatedAt?: DateTimeFilter<"ClothingItem"> | Date | string
    userId?: StringFilter<"ClothingItem"> | string
    categoryId?: StringFilter<"ClothingItem"> | string
  }

  export type OutfitUpsertWithWhereUniqueWithoutUserInput = {
    where: OutfitWhereUniqueInput
    update: XOR<OutfitUpdateWithoutUserInput, OutfitUncheckedUpdateWithoutUserInput>
    create: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput>
  }

  export type OutfitUpdateWithWhereUniqueWithoutUserInput = {
    where: OutfitWhereUniqueInput
    data: XOR<OutfitUpdateWithoutUserInput, OutfitUncheckedUpdateWithoutUserInput>
  }

  export type OutfitUpdateManyWithWhereWithoutUserInput = {
    where: OutfitScalarWhereInput
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyWithoutUserInput>
  }

  export type OutfitScalarWhereInput = {
    AND?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
    OR?: OutfitScalarWhereInput[]
    NOT?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
    id?: StringFilter<"Outfit"> | string
    name?: StringFilter<"Outfit"> | string
    description?: StringNullableFilter<"Outfit"> | string | null
    occasion?: StringNullableFilter<"Outfit"> | string | null
    season?: StringNullableFilter<"Outfit"> | string | null
    imageUrl?: StringNullableFilter<"Outfit"> | string | null
    createdAt?: DateTimeFilter<"Outfit"> | Date | string
    updatedAt?: DateTimeFilter<"Outfit"> | Date | string
    userId?: StringFilter<"Outfit"> | string
  }

  export type ClothingItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClothingItemsInput
    tags?: TagCreateNestedManyWithoutClothingItemsInput
    outfitItems?: OutfitItemCreateNestedManyWithoutClothingItemInput
  }

  export type ClothingItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tags?: TagUncheckedCreateNestedManyWithoutClothingItemsInput
    outfitItems?: OutfitItemUncheckedCreateNestedManyWithoutClothingItemInput
  }

  export type ClothingItemCreateOrConnectWithoutCategoryInput = {
    where: ClothingItemWhereUniqueInput
    create: XOR<ClothingItemCreateWithoutCategoryInput, ClothingItemUncheckedCreateWithoutCategoryInput>
  }

  export type ClothingItemCreateManyCategoryInputEnvelope = {
    data: ClothingItemCreateManyCategoryInput | ClothingItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ClothingItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ClothingItemWhereUniqueInput
    update: XOR<ClothingItemUpdateWithoutCategoryInput, ClothingItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<ClothingItemCreateWithoutCategoryInput, ClothingItemUncheckedCreateWithoutCategoryInput>
  }

  export type ClothingItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ClothingItemWhereUniqueInput
    data: XOR<ClothingItemUpdateWithoutCategoryInput, ClothingItemUncheckedUpdateWithoutCategoryInput>
  }

  export type ClothingItemUpdateManyWithWhereWithoutCategoryInput = {
    where: ClothingItemScalarWhereInput
    data: XOR<ClothingItemUpdateManyMutationInput, ClothingItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutClothingItemsInput = {
    id: string
    email: string
    name?: string | null
    photoURL?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outfits?: OutfitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClothingItemsInput = {
    id: string
    email: string
    name?: string | null
    photoURL?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outfits?: OutfitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClothingItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClothingItemsInput, UserUncheckedCreateWithoutClothingItemsInput>
  }

  export type CategoryCreateWithoutClothingItemsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutClothingItemsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutClothingItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutClothingItemsInput, CategoryUncheckedCreateWithoutClothingItemsInput>
  }

  export type TagCreateWithoutClothingItemsInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutClothingItemsInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutClothingItemsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutClothingItemsInput, TagUncheckedCreateWithoutClothingItemsInput>
  }

  export type OutfitItemCreateWithoutClothingItemInput = {
    id?: string
    outfit: OutfitCreateNestedOneWithoutOutfitItemsInput
  }

  export type OutfitItemUncheckedCreateWithoutClothingItemInput = {
    id?: string
    outfitId: string
  }

  export type OutfitItemCreateOrConnectWithoutClothingItemInput = {
    where: OutfitItemWhereUniqueInput
    create: XOR<OutfitItemCreateWithoutClothingItemInput, OutfitItemUncheckedCreateWithoutClothingItemInput>
  }

  export type OutfitItemCreateManyClothingItemInputEnvelope = {
    data: OutfitItemCreateManyClothingItemInput | OutfitItemCreateManyClothingItemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClothingItemsInput = {
    update: XOR<UserUpdateWithoutClothingItemsInput, UserUncheckedUpdateWithoutClothingItemsInput>
    create: XOR<UserCreateWithoutClothingItemsInput, UserUncheckedCreateWithoutClothingItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClothingItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClothingItemsInput, UserUncheckedUpdateWithoutClothingItemsInput>
  }

  export type UserUpdateWithoutClothingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClothingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutClothingItemsInput = {
    update: XOR<CategoryUpdateWithoutClothingItemsInput, CategoryUncheckedUpdateWithoutClothingItemsInput>
    create: XOR<CategoryCreateWithoutClothingItemsInput, CategoryUncheckedCreateWithoutClothingItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutClothingItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutClothingItemsInput, CategoryUncheckedUpdateWithoutClothingItemsInput>
  }

  export type CategoryUpdateWithoutClothingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutClothingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpsertWithWhereUniqueWithoutClothingItemsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutClothingItemsInput, TagUncheckedUpdateWithoutClothingItemsInput>
    create: XOR<TagCreateWithoutClothingItemsInput, TagUncheckedCreateWithoutClothingItemsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutClothingItemsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutClothingItemsInput, TagUncheckedUpdateWithoutClothingItemsInput>
  }

  export type TagUpdateManyWithWhereWithoutClothingItemsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutClothingItemsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type OutfitItemUpsertWithWhereUniqueWithoutClothingItemInput = {
    where: OutfitItemWhereUniqueInput
    update: XOR<OutfitItemUpdateWithoutClothingItemInput, OutfitItemUncheckedUpdateWithoutClothingItemInput>
    create: XOR<OutfitItemCreateWithoutClothingItemInput, OutfitItemUncheckedCreateWithoutClothingItemInput>
  }

  export type OutfitItemUpdateWithWhereUniqueWithoutClothingItemInput = {
    where: OutfitItemWhereUniqueInput
    data: XOR<OutfitItemUpdateWithoutClothingItemInput, OutfitItemUncheckedUpdateWithoutClothingItemInput>
  }

  export type OutfitItemUpdateManyWithWhereWithoutClothingItemInput = {
    where: OutfitItemScalarWhereInput
    data: XOR<OutfitItemUpdateManyMutationInput, OutfitItemUncheckedUpdateManyWithoutClothingItemInput>
  }

  export type OutfitItemScalarWhereInput = {
    AND?: OutfitItemScalarWhereInput | OutfitItemScalarWhereInput[]
    OR?: OutfitItemScalarWhereInput[]
    NOT?: OutfitItemScalarWhereInput | OutfitItemScalarWhereInput[]
    id?: StringFilter<"OutfitItem"> | string
    outfitId?: StringFilter<"OutfitItem"> | string
    clothingItemId?: StringFilter<"OutfitItem"> | string
  }

  export type ClothingItemCreateWithoutTagsInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClothingItemsInput
    category: CategoryCreateNestedOneWithoutClothingItemsInput
    outfitItems?: OutfitItemCreateNestedManyWithoutClothingItemInput
  }

  export type ClothingItemUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    outfitItems?: OutfitItemUncheckedCreateNestedManyWithoutClothingItemInput
  }

  export type ClothingItemCreateOrConnectWithoutTagsInput = {
    where: ClothingItemWhereUniqueInput
    create: XOR<ClothingItemCreateWithoutTagsInput, ClothingItemUncheckedCreateWithoutTagsInput>
  }

  export type ClothingItemUpsertWithWhereUniqueWithoutTagsInput = {
    where: ClothingItemWhereUniqueInput
    update: XOR<ClothingItemUpdateWithoutTagsInput, ClothingItemUncheckedUpdateWithoutTagsInput>
    create: XOR<ClothingItemCreateWithoutTagsInput, ClothingItemUncheckedCreateWithoutTagsInput>
  }

  export type ClothingItemUpdateWithWhereUniqueWithoutTagsInput = {
    where: ClothingItemWhereUniqueInput
    data: XOR<ClothingItemUpdateWithoutTagsInput, ClothingItemUncheckedUpdateWithoutTagsInput>
  }

  export type ClothingItemUpdateManyWithWhereWithoutTagsInput = {
    where: ClothingItemScalarWhereInput
    data: XOR<ClothingItemUpdateManyMutationInput, ClothingItemUncheckedUpdateManyWithoutTagsInput>
  }

  export type UserCreateWithoutOutfitsInput = {
    id: string
    email: string
    name?: string | null
    photoURL?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothingItems?: ClothingItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOutfitsInput = {
    id: string
    email: string
    name?: string | null
    photoURL?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothingItems?: ClothingItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOutfitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOutfitsInput, UserUncheckedCreateWithoutOutfitsInput>
  }

  export type OutfitItemCreateWithoutOutfitInput = {
    id?: string
    clothingItem: ClothingItemCreateNestedOneWithoutOutfitItemsInput
  }

  export type OutfitItemUncheckedCreateWithoutOutfitInput = {
    id?: string
    clothingItemId: string
  }

  export type OutfitItemCreateOrConnectWithoutOutfitInput = {
    where: OutfitItemWhereUniqueInput
    create: XOR<OutfitItemCreateWithoutOutfitInput, OutfitItemUncheckedCreateWithoutOutfitInput>
  }

  export type OutfitItemCreateManyOutfitInputEnvelope = {
    data: OutfitItemCreateManyOutfitInput | OutfitItemCreateManyOutfitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOutfitsInput = {
    update: XOR<UserUpdateWithoutOutfitsInput, UserUncheckedUpdateWithoutOutfitsInput>
    create: XOR<UserCreateWithoutOutfitsInput, UserUncheckedCreateWithoutOutfitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOutfitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOutfitsInput, UserUncheckedUpdateWithoutOutfitsInput>
  }

  export type UserUpdateWithoutOutfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothingItems?: ClothingItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOutfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothingItems?: ClothingItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OutfitItemUpsertWithWhereUniqueWithoutOutfitInput = {
    where: OutfitItemWhereUniqueInput
    update: XOR<OutfitItemUpdateWithoutOutfitInput, OutfitItemUncheckedUpdateWithoutOutfitInput>
    create: XOR<OutfitItemCreateWithoutOutfitInput, OutfitItemUncheckedCreateWithoutOutfitInput>
  }

  export type OutfitItemUpdateWithWhereUniqueWithoutOutfitInput = {
    where: OutfitItemWhereUniqueInput
    data: XOR<OutfitItemUpdateWithoutOutfitInput, OutfitItemUncheckedUpdateWithoutOutfitInput>
  }

  export type OutfitItemUpdateManyWithWhereWithoutOutfitInput = {
    where: OutfitItemScalarWhereInput
    data: XOR<OutfitItemUpdateManyMutationInput, OutfitItemUncheckedUpdateManyWithoutOutfitInput>
  }

  export type OutfitCreateWithoutOutfitItemsInput = {
    id?: string
    name: string
    description?: string | null
    occasion?: string | null
    season?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOutfitsInput
  }

  export type OutfitUncheckedCreateWithoutOutfitItemsInput = {
    id?: string
    name: string
    description?: string | null
    occasion?: string | null
    season?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type OutfitCreateOrConnectWithoutOutfitItemsInput = {
    where: OutfitWhereUniqueInput
    create: XOR<OutfitCreateWithoutOutfitItemsInput, OutfitUncheckedCreateWithoutOutfitItemsInput>
  }

  export type ClothingItemCreateWithoutOutfitItemsInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClothingItemsInput
    category: CategoryCreateNestedOneWithoutClothingItemsInput
    tags?: TagCreateNestedManyWithoutClothingItemsInput
  }

  export type ClothingItemUncheckedCreateWithoutOutfitItemsInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    tags?: TagUncheckedCreateNestedManyWithoutClothingItemsInput
  }

  export type ClothingItemCreateOrConnectWithoutOutfitItemsInput = {
    where: ClothingItemWhereUniqueInput
    create: XOR<ClothingItemCreateWithoutOutfitItemsInput, ClothingItemUncheckedCreateWithoutOutfitItemsInput>
  }

  export type OutfitUpsertWithoutOutfitItemsInput = {
    update: XOR<OutfitUpdateWithoutOutfitItemsInput, OutfitUncheckedUpdateWithoutOutfitItemsInput>
    create: XOR<OutfitCreateWithoutOutfitItemsInput, OutfitUncheckedCreateWithoutOutfitItemsInput>
    where?: OutfitWhereInput
  }

  export type OutfitUpdateToOneWithWhereWithoutOutfitItemsInput = {
    where?: OutfitWhereInput
    data: XOR<OutfitUpdateWithoutOutfitItemsInput, OutfitUncheckedUpdateWithoutOutfitItemsInput>
  }

  export type OutfitUpdateWithoutOutfitItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOutfitsNestedInput
  }

  export type OutfitUncheckedUpdateWithoutOutfitItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ClothingItemUpsertWithoutOutfitItemsInput = {
    update: XOR<ClothingItemUpdateWithoutOutfitItemsInput, ClothingItemUncheckedUpdateWithoutOutfitItemsInput>
    create: XOR<ClothingItemCreateWithoutOutfitItemsInput, ClothingItemUncheckedCreateWithoutOutfitItemsInput>
    where?: ClothingItemWhereInput
  }

  export type ClothingItemUpdateToOneWithWhereWithoutOutfitItemsInput = {
    where?: ClothingItemWhereInput
    data: XOR<ClothingItemUpdateWithoutOutfitItemsInput, ClothingItemUncheckedUpdateWithoutOutfitItemsInput>
  }

  export type ClothingItemUpdateWithoutOutfitItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClothingItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutClothingItemsNestedInput
    tags?: TagUpdateManyWithoutClothingItemsNestedInput
  }

  export type ClothingItemUncheckedUpdateWithoutOutfitItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutClothingItemsNestedInput
  }

  export type ClothingItemCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type OutfitCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    occasion?: string | null
    season?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClothingItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutClothingItemsNestedInput
    tags?: TagUpdateManyWithoutClothingItemsNestedInput
    outfitItems?: OutfitItemUpdateManyWithoutClothingItemNestedInput
  }

  export type ClothingItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutClothingItemsNestedInput
    outfitItems?: OutfitItemUncheckedUpdateManyWithoutClothingItemNestedInput
  }

  export type ClothingItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfitItems?: OutfitItemUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfitItems?: OutfitItemUncheckedUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothingItemCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    color?: string | null
    size?: string | null
    price?: number | null
    purchaseDate?: Date | string | null
    imageUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ClothingItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClothingItemsNestedInput
    tags?: TagUpdateManyWithoutClothingItemsNestedInput
    outfitItems?: OutfitItemUpdateManyWithoutClothingItemNestedInput
  }

  export type ClothingItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutClothingItemsNestedInput
    outfitItems?: OutfitItemUncheckedUpdateManyWithoutClothingItemNestedInput
  }

  export type ClothingItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitItemCreateManyClothingItemInput = {
    id?: string
    outfitId: string
  }

  export type TagUpdateWithoutClothingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutClothingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyWithoutClothingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitItemUpdateWithoutClothingItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfit?: OutfitUpdateOneRequiredWithoutOutfitItemsNestedInput
  }

  export type OutfitItemUncheckedUpdateWithoutClothingItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfitId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitItemUncheckedUpdateManyWithoutClothingItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfitId?: StringFieldUpdateOperationsInput | string
  }

  export type ClothingItemUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClothingItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutClothingItemsNestedInput
    outfitItems?: OutfitItemUpdateManyWithoutClothingItemNestedInput
  }

  export type ClothingItemUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    outfitItems?: OutfitItemUncheckedUpdateManyWithoutClothingItemNestedInput
  }

  export type ClothingItemUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitItemCreateManyOutfitInput = {
    id?: string
    clothingItemId: string
  }

  export type OutfitItemUpdateWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    clothingItem?: ClothingItemUpdateOneRequiredWithoutOutfitItemsNestedInput
  }

  export type OutfitItemUncheckedUpdateWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    clothingItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitItemUncheckedUpdateManyWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    clothingItemId?: StringFieldUpdateOperationsInput | string
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