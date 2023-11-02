uniform mat4 projectionMatrix; //transform the coordinates into the clip space coordinates
uniform mat4 viewMatrix; // applies transformation relative to the camera(fov, near/far, postion etc..)
uniform mat4 modelMatrix; //applies transformations relative to the mesh(position, scale, rotation)
uniform vec2 uFrequency;
uniform float uTime;

attribute vec3 position;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(modelPosition.x * uFrequency.x + uTime) * 0.1;
    modelPosition.z += sin(modelPosition.y * uFrequency.y + uTime) * 0.1;


    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}