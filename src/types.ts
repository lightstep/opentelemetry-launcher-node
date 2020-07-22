import { NodeSDKConfiguration } from '@opentelemetry/sdk-node';

/** Mapping of environment variable names to LightstepNodeSDKConfiguration names */
export enum LS_OPTION_ALIAS_MAP {
  LS_ACCESS_TOKEN = 'token',
  LS_SERVICE_NAME = 'serviceName',
  LS_SERVICE_VERSION = 'serviceVersion',
  OTEL_EXPORTER_OTLP_SPAN_ENDPOINT = 'spanEndpoint',
  OTEL_PROPAGATORS = 'propagators',
}

export type LightstepEnvType = {
  [key in keyof typeof LS_OPTION_ALIAS_MAP]: string;
};
export type LightstepConfigType = Record<LS_OPTION_ALIAS_MAP, string>;

export type FailureHandler = (message: string) => void;

/** Lightstep environment variable names */
export interface LightstepEnv extends Partial<LightstepEnvType> {}

/** Lightstep flavored configuration for the OpenTelemetry JS SDK */
export interface LightstepNodeSDKConfiguration
  extends Partial<LightstepConfigType>,
    NodeSDKConfiguration {
  failureHandler?: FailureHandler;
}

/** Lightstep configuration error */
export class LightstepConfigurationError extends Error {}

/** Supported propagation formats */
export type PropagationFormat = 'b3' | 'tracecontext' | 'correlationcontext';
