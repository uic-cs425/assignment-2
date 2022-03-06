export default `#version 300 es
precision highp float;

uniform sampler2D uSampler;

in vec4 vColor;
in vec4 vLightSpacePos;
out vec4 outColor;

vec3 shadowCalculation(vec4 lightSpacePos) {
    // TODO: shadow calculation
}

void main() {
    // TODO: compute shadowmap coordenates 
    // TODO: evaluate if point is in shadow or not
}
`;